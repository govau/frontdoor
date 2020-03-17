using System.Collections.Generic;
using System.Threading.Tasks;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Services {
    public interface IQnAMakerService : IServices {
        Task<IEnumerable<SearchResult>> BuyerSearch(SearchQuery searchQuery);
        Task<IEnumerable<SearchResult>> SellerSearch(SearchQuery searchQuery);
    }
}
