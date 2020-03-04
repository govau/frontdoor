using Newtonsoft.Json;

namespace Dta.Frontdoor.Api.Models {
    public class Format {
        [JsonProperty("short_name")]
        public string ShortNameIncoming {
            set {
                ShortName = value;
            }
        }
        public string ShortName { get; set; }
    }
}
