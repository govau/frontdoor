using System.Threading.Tasks;

namespace Dta.Frontdoor.Api.Services {
    public interface ISlackService : IServices {
         Task<bool> PostMessage(string message) ;
    }
}
