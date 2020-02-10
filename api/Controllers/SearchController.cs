using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Azure.CognitiveServices.Knowledge.QnAMaker;
using Microsoft.Azure.CognitiveServices.Knowledge.QnAMaker.Models;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;
        private const string CACHE_KEY = "SearchCache";
        public SearchController(IConfiguration configuration, IMemoryCache cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        [HttpPost]
        public async Task<IEnumerable<SearchResult>> Post(SearchQuery searchQuery)
        {
            if (_cache.TryGetValue(searchQuery.ToString(), out List<SearchResult> cacheEntry))
            {
                return cacheEntry;
            }
            var endpointKey = _configuration["QnAMakerEndpointKey"];
            var endpoint = Environment.GetEnvironmentVariable("QnAMakerEndpoint");
            var kbId = Environment.GetEnvironmentVariable("QnAMakerKbId");
            var client = new QnAMakerRuntimeClient(new EndpointKeyServiceClientCredentials(endpointKey))
            {
                RuntimeEndpoint = endpoint
            };
            var queryDto = new QueryDTO()
            {
                Question = searchQuery.Query,
                Top = searchQuery.Top,
                StrictFilters = new List<MetadataDTO>()
            };

            switch (searchQuery.Type)
            {
                case "agency":
                    queryDto.StrictFilters.Add(new MetadataDTO("result", "agency"));
                    break;
                case "product":
                    queryDto.StrictFilters.Add(new MetadataDTO("result", "product"));
                    break;
                case "panel":
                    queryDto.ScoreThreshold = 90;
                    queryDto.StrictFilters.Add(new MetadataDTO("result", "panel"));
                    break;
                default:
                    throw new Exception("Search type required");
            }

            var response = await client.Runtime.GenerateAnswerAsync(kbId, queryDto);

            var result = new List<SearchResult>();
            foreach (var a in response.Answers)
            {
                if (a.Score == 0) {
                    continue;
                }
                var searchResult = new SearchResult()
                {
                    Text = a.Answer,
                    Metadata = new Dictionary<string, string>()
                };
                searchResult.Metadata = new Dictionary<string, string>();
                foreach (var m in a.Metadata)
                {
                    searchResult.Metadata.Add(m.Name, m.Value);
                }
                result.Add(searchResult);
            }

            var cacheEntryOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromHours(4));
            _cache.Set<List<SearchResult>>(searchQuery.ToString(), result, cacheEntryOptions);
            return result;
        }
    }
}
