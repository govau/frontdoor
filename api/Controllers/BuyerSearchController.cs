﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Caching.Memory;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerSearchController : BaseSearchController
    {
        public BuyerSearchController(IConfiguration configuration, IMemoryCache cache) : base(configuration, cache, "QnAMakerBuyerKbId", "buyer") { }

        [HttpPost]
        public async Task<IEnumerable<SearchResult>> Post(SearchQuery searchQuery)
        {
            return await base.Search(searchQuery);
        }
    }
}