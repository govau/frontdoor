using System;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public EventController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<List<Event>> Get()
        {
            var eventbriteToken = _configuration["EventbriteToken"];
            if (string.IsNullOrWhiteSpace(eventbriteToken) == true)
            {
                return new List<Event>();
            }
            using (var client = new HttpClient())
            using (var stream = await client.GetStreamAsync(new Uri($"https://www.eventbriteapi.com/v3/users/me/events?token={eventbriteToken}&status=live&expand=venue,format")))
            using (var reader = new StreamReader(stream))
            {
                string s = reader.ReadToEnd();
                var events = JsonConvert.DeserializeObject<Events>(s);
                return events.EventList.Where(e => e.Listed).ToList();
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
