using RESS.DEMO.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RESS.DEMO.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        private List<Client> clientAccount = new List<Client>();
        public ValuesController()
        {
            Account accountInfo1 = new Account{ Id=1, ClientId=1, AccountBalance=2000.20};
            Client clientInfo1 = new Client { ClientId = 1, ClientName = "David", AccountInfo = accountInfo1 };
            clientAccount.Add(clientInfo1);

            Account accountInfo2 = new Account { Id = 2, ClientId = 2, AccountBalance = 100000.100 };
            Client clientInfo2 = new Client { ClientId = 2, ClientName = "John", AccountInfo = accountInfo2 };
            clientAccount.Add(clientInfo2);
        }

        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public Client Get(int? id)
        {
            if(!id.HasValue)
            {
                id=1;
            }
            return clientAccount.Single(x => x.ClientId.Equals(id));
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}