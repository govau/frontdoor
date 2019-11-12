using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Azure.CognitiveServices.Knowledge.QnAMaker;
using Microsoft.Azure.CognitiveServices.Knowledge.QnAMaker.Models;

namespace Dta.Frontdoor.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AnswerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<QnASearchResultList> Post(QueryDTO data)
        {
            var endpointKey = _configuration["QnAMakerEndpointKey"];
            var endpoint = Environment.GetEnvironmentVariable("QnAMakerEndpoint");
            var kbId = Environment.GetEnvironmentVariable("QnAMakerKbId");
            var client = new QnAMakerRuntimeClient(new EndpointKeyServiceClientCredentials(endpointKey)) {
                RuntimeEndpoint = endpoint
            };
            var response = await client.Runtime.GenerateAnswerAsync(kbId, data);
            return response;
        }
    }
}
