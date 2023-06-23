using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;

namespace Lucie.Function
{
    public static class BirthdayRsvp
    {
        [FunctionName("BirthdayRsvp")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            bool resp =  Convert.ToBoolean(req.Query["resp"]);
            string nom =  req.Query["nom"];

            var cosmosClient = new CosmosClient("");

            var db = cosmosClient.GetDatabase("Birthday");
            var container = db.GetContainer("Responses");

            await container.CreateItemAsync(new BirthdayResponse(){
                vient = resp,
                nom = nom                
            });

             log.LogInformation("Res:" + resp);

            return new OkObjectResult(new { text = resp } );
        }
    }
}
