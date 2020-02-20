using System.Collections.Generic;

namespace Dta.Frontdoor.Api.Models {
    public class EventGroup {
        public string Key { get; set; }
        public IEnumerable<Event> Events {get;set;}
    }
}
