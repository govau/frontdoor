using System.Threading.Tasks;

namespace Dta.Frontdoor.Api.Services {
    public interface ISlackService : IServices {
         Task<dynamic> PostMessage(string message) ;
    }
}
