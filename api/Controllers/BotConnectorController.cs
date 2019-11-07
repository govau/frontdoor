using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Dta.Frontdoor.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BotConnectorController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public BotConnectorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET api/values/5
        [HttpGet]
        public async Task<ActionResult<string>> Get(int id)
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("Authorization", $"BotConnector {_configuration["botConnector"]}");
                var response = await client.GetStringAsync("https://webchat.botframework.com/api/tokens");
                return response;
            }
        }
    }
}
