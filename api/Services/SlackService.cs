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
    public class SlackService : ISlackService {
        private readonly IConfiguration _configuration;
        private IMemoryCache _cache;
        private const string CACHE_KEY = "EventbriteCache";

        public SlackService(IConfiguration configuration, IMemoryCache cache) {
            _configuration = configuration;
            _cache = cache;
        }

        public async Task<dynamic> PostMessage(string message) {
            var slackFeedbackURL = _configuration["SlackFeedbackURL"];
            if (string.IsNullOrWhiteSpace(slackFeedbackURL) == true) {
                return new object();
            }
            using (var client = new HttpClient()) {
                var content = new StringContent(
                    JsonConvert.SerializeObject(
                        new {
                            text = message
                        }
                    ),
                    System.Text.Encoding.Default,
                    "application/json"
                );
                var result = await client.PostAsync(slackFeedbackURL, content);
                return result.IsSuccessStatusCode;
            }
        }
    }
}
