using Lamar;

namespace Dta.Frontdoor.Api {
    public class SelfServiceRegistry: ServiceRegistry {
        public SelfServiceRegistry() {
            Scan(x => {
                x.Assembly(typeof(Program).Assembly);
                x.WithDefaultConventions();
            });
        }
    }
}
