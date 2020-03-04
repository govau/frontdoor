using System;

namespace Dta.Frontdoor.Api.Models {
    public class DateValue {
        public DateTime Utc { get; set; }
        public DateTime Local { get; set; }
        public string TimeZone { get; set; }
    }
}
