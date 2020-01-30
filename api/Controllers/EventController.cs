using System;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;
        private const string CACHE_KEY = "EventbriteCache";

        public EventController(IConfiguration configuration, IMemoryCache cache)
        {
            _configuration = configuration;
            _cache = cache;
        }

        [HttpGet]
        public async Task<List<Event>> Get()
        {
            var eventbriteToken = _configuration["EventbriteToken"];
            if (string.IsNullOrWhiteSpace(eventbriteToken) == true)
            {
                return new List<Event>();
            }

            string cacheEntry;

            if (!_cache.TryGetValue(CACHE_KEY, out cacheEntry))
            {
                using (var client = new HttpClient())
                using (var stream = await client.GetStreamAsync(new Uri($"https://www.eventbriteapi.com/v3/users/me/events?token={eventbriteToken}&status=live&expand=venue,format")))
                using (var reader = new StreamReader(stream))
                {
                    string s = reader.ReadToEnd();
                    cacheEntry = s;
                }

                var cacheEntryOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromHours(4));

                _cache.Set(CACHE_KEY, cacheEntry, cacheEntryOptions);
            }

            var events = JsonConvert.DeserializeObject<Events>(cacheEntry);
            return events.EventList.Where(e => e.Listed).ToList();
        }

        // [HttpGet("text")]
        // public async Task<dynamic> GetText()
        // {
        //     var eventbriteToken = _configuration["EventbriteToken"];
        //     if (string.IsNullOrWhiteSpace(eventbriteToken) == true)
        //     {
        //         return new List<dynamic>();
        //     }
        //     using (var client = new HttpClient())
        //     using (var stream = await client.GetStreamAsync(new Uri($"https://www.eventbriteapi.com/v3/users/me/events?token={eventbriteToken}&status=live&expand=venue,format")))
        //     using (var reader = new StreamReader(stream))
        //     {
        //         string s = reader.ReadToEnd();
        //         return s;
        //     }
        // }
    }
}
