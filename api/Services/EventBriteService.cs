using System;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Services {
    public class EventBriteService : IEventBriteService {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;
        private const string CACHE_KEY = "EventbriteCache";

        public EventBriteService(IConfiguration configuration, IMemoryCache cache) {
            _configuration = configuration;
            _cache = cache;
        }

        public async Task<List<EventGroup>> GetEvents() {
            if (_cache.TryGetValue(CACHE_KEY, out List<EventGroup> cacheEntry)) {
                return cacheEntry;
            }
            var eventbriteToken = _configuration["EventbriteToken"];
            if (string.IsNullOrWhiteSpace(eventbriteToken) == true) {
                return new List<EventGroup>();
            }

            using (var client = new HttpClient())
            using (var stream = await client.GetStreamAsync(new Uri($"https://www.eventbriteapi.com/v3/users/me/events?token={eventbriteToken}&status=live&expand=venue,format")))
            using (var reader = new StreamReader(stream)) {
                string s = reader.ReadToEnd();
                var events = JsonConvert.DeserializeObject<Events>(s);
                var result = events.EventList.Where(e => e.Listed).Take(4).ToList();
                var grouped = result.GroupBy(
                    e => string.Format("{0:MMMM}", e.Start.Local),
                    e => e,
                    (g, e) => new EventGroup {
                        Key = g,
                        Events = e
                    }).ToList();
                var cacheEntryOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromMinutes(20));
                _cache.Set<List<EventGroup>>(CACHE_KEY, grouped, cacheEntryOptions);

                return grouped;
            }
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
