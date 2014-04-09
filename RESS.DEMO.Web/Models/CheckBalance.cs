using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESS.DEMO.Web.Interface
{
    public class CheckBalance : BusinessFunction
    {

        public CheckBalance()
        {
            this.controller = "CheckBalance";
            this.directiveTag = "check-balance";
            this.viewIdentifierByClient = "";
            this.language = "en";
        }

        public string accountHolderLabel = string.Empty;
        public string title = string.Empty; 
    }

    

}