using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Dta.Frontdoor.Api.Services {
    public class SlackService : ISlackService {
        private readonly IConfiguration _configuration;
        private readonly ILogger<SlackService> _logger;
        private readonly IMemoryCache _cache;
        private const string CACHE_KEY = "EventbriteCache";

        public SlackService(IConfiguration configuration, IMemoryCache cache, ILogger<SlackService> logger) {
            _configuration = configuration;
            _cache = cache;
            _logger = logger;
        }

        public async Task<bool> PostMessage(string message) {
            var slackFeedbackURL = _configuration["SlackFeedbackURL"];
            if (string.IsNullOrWhiteSpace(slackFeedbackURL) == true) {
                _logger.LogInformation(message);
                return true;
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
