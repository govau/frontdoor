using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dta.Frontdoor.Api.Models;
using Dta.Frontdoor.Api.Services;

namespace Dta.Frontdoor.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase {
        private readonly IEventBriteService _eventBriteService;

        public EventController(IEventBriteService eventBriteService) {
            _eventBriteService = eventBriteService;
        }

        [HttpGet]
        public async Task<List<EventGroup>> Get() {
            return await _eventBriteService.GetEvents();
        }
    }
}
