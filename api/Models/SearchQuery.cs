namespace Dta.Frontdoor.Api.Models
{
    public class SearchQuery
    {
        public string Query { get; set; }
        public int? Top { get; set; }
        public string Type { get; set; }

        public override string ToString() => $"{Type}{Query}{Top}";
    }
}
