using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Azure.CognitiveServices.Knowledge.QnAMaker;
using Microsoft.Azure.CognitiveServices.Knowledge.QnAMaker.Models;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Services {
    public class QnAMakerService : IQnAMakerService {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;

        public QnAMakerService(IConfiguration configuration, IMemoryCache cache) {
            _configuration = configuration;
            _cache = cache;
        }

        public async Task<IEnumerable<SearchResult>> BuyerSearch(SearchQuery searchQuery) {
            return await Search(searchQuery, _configuration["QnAMakerBuyerKbId"]);
        }
        public async Task<IEnumerable<SearchResult>> SellerSearch(SearchQuery searchQuery) {
            return await Search(searchQuery, _configuration["QnAMakerSellerKbId"]);
        }
        private async Task<IEnumerable<SearchResult>> Search(SearchQuery searchQuery, string kbId) {
            var cacheKey = $"{kbId}-{searchQuery.ToString()}";
            if (_cache.TryGetValue(cacheKey, out List<SearchResult> cacheEntry)) {
                return cacheEntry;
            }
            var endpointKey = _configuration["QnAMakerEndpointKey"];
            var endpoint = _configuration["QnAMakerEndpoint"];
            var client = new QnAMakerRuntimeClient(new EndpointKeyServiceClientCredentials(endpointKey)) {
                RuntimeEndpoint = endpoint
            };
            var queryDto = new QueryDTO() {
                Question = searchQuery.Query,
                Top = searchQuery.Top,
                StrictFilters = new List<MetadataDTO>()
            };

            switch (searchQuery.Type) {
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
            foreach (var a in response.Answers) {
                if (a.Score == 0) {
                    continue;
                }
                if (result.FindIndex(sr => sr.Text == a.Answer.Trim()) >= 0) {
                    continue;
                }
                var searchResult = new SearchResult() {
                    Text = a.Answer.Trim(),
                    Metadata = new Dictionary<string, string>()
                };
                searchResult.Metadata = new Dictionary<string, string>();
                foreach (var m in a.Metadata) {
                    searchResult.Metadata.Add(m.Name, m.Value);
                }
                result.Add(searchResult);
            }

            var cacheEntryOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromMinutes(30));
            _cache.Set<List<SearchResult>>(cacheKey, result, cacheEntryOptions);
            return result;
        }
    }
}
