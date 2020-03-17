using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dta.Frontdoor.Api.Models;
using Dta.Frontdoor.Api.Services;

namespace Dta.Frontdoor.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerSearchController : ControllerBase {
        private readonly IQnAMakerService _qnaMakerService;
        public BuyerSearchController(IQnAMakerService qnaMakerService) {
            _qnaMakerService = qnaMakerService;
        }

        [HttpPost]
        public async Task<IEnumerable<SearchResult>> Post(SearchQuery searchQuery) {
            return await _qnaMakerService.BuyerSearch(searchQuery);
        }
    }
}
