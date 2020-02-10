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
    public class FeedbackController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public FeedbackController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<dynamic> Post(Feedback feedback)
        {
            var slackFeedbackURL = _configuration["SlackFeedbackURL"];
            if (string.IsNullOrWhiteSpace(slackFeedbackURL) == true)
            {
                return new object();
            }

            var slackMessage =
$@":rotating_light:*Feedback has been recieved*:rotating_light:
ease: {feedback.Ease}
improvements: {feedback.SuggestedImprovement}
email: {feedback.Email}";

            using (var client = new HttpClient()) {
                var content = new StringContent(
                    JsonConvert.SerializeObject(
                        new {
                            text = slackMessage
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
