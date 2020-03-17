using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dta.Frontdoor.Api.Models;
using Dta.Frontdoor.Api.Services;

namespace Dta.Frontdoor.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase {
        private readonly ISlackService _slackService;

        public FeedbackController(ISlackService slackService) {
            _slackService = slackService;
        }

        [HttpPost]
        public async Task<bool> Post(Feedback feedback) {
            var face = "";
            switch (feedback.Ease) {
                case 1:
                    face = ":smile:";
                    break;
                case 2:
                    face = ":neutral_face:";
                    break;
                default:
                    face = ":disappointed:";
                    break;
            }

            var slackMessage =
$@":rotating_light:*Feedback has been recieved*:rotating_light:
ease: {face}
improvements: {feedback.SuggestedImprovement}
email: {feedback.Email}
location: {feedback.Location}";

            return await _slackService.PostMessage(slackMessage);
        }
    }
}
