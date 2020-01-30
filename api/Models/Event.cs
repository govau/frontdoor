using System;
using Newtonsoft.Json;

namespace Dta.Frontdoor.Api.Models
{
    public class Event
    {
        public string Id { get; set; }
        
        public StringValue Name { get; set; }

        [JsonProperty("online_event")]
        public bool IncomingOnlineEvent { set { OnlineEvent = value; } }

        public bool OnlineEvent { get; set; }

        public string Url { get; set; }

        public bool Listed { get; set; }

        public Venue Venue { get; set; }

        public Format Format { get; set; }

        public DateValue Start { get; set; }
    }
}
