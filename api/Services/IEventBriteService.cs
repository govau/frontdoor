using System.Collections.Generic;
using System.Threading.Tasks;
using Dta.Frontdoor.Api.Models;

namespace Dta.Frontdoor.Api.Services {
    public interface IEventBriteService : IServices {
        Task<List<EventGroup>> GetEvents();
    }
}
