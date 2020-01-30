using Newtonsoft.Json;

namespace Dta.Frontdoor.Api.Models
{
    public class Venue
    {
        //[JsonProperty("name")]
        public string Name { get; set; }

        //[JsonProperty("address")]
        public Address Address { get; set; }

    }
}
