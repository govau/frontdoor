using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Dta.Frontdoor.Api.Models
{
    public class Events
    {
        [JsonProperty("events")]
        public List<Event> EventList { get; set; }
    }
}
