using System.Collections.Generic;

namespace Dta.Frontdoor.Api.Models
{
    public class SearchResult
    {
        public string Text { get; set; }
        public IDictionary<string, string> Metadata { get; set; }
    }
}
