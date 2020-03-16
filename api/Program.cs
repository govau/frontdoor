﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Dta.Frontdoor.Api {
    public class Program {
        public static void Main(string[] args) {
            var vcapServicesString = Environment.GetEnvironmentVariable("VCAP_SERVICES");
            if (!string.IsNullOrEmpty(vcapServicesString)) {
                dynamic vcapServices = JsonConvert.DeserializeObject<IDictionary<string, dynamic>>(vcapServicesString);
                foreach (JObject ups in vcapServices["user-provided"]) {
                    var credentials = JObject.FromObject(ups["credentials"]);
                    foreach (var credentialProps in credentials.Properties()) {
                        Environment.SetEnvironmentVariable(credentialProps.Name, credentialProps.Values().SingleOrDefault().Value<string>());
                    }
                }
            }
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) {
            var builder = WebHost.CreateDefaultBuilder(args)                
                .ConfigureAppConfiguration((hc, c) => {
                    c.AddEnvironmentVariables();
                    if (args != null) {
                        c.AddCommandLine(args);
                    }
                })
                .UseSentry()
                .UseStartup<Startup>();

            if (!string.IsNullOrEmpty(Environment.GetEnvironmentVariable("PORT"))) {
                builder = builder.UseUrls($"http://*:{Environment.GetEnvironmentVariable("PORT")}");
            }

            return builder;
        }
    }
}
