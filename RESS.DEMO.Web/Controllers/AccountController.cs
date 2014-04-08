using RESS.DEMO.Web.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RESS.DEMO.Web.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult CheckBalance(int? clientid, string lang)
        {
            //get check balance specific features from backend
            CheckBalance checkBalance = new CheckBalance();

            

            //The below condition will be fetched from database configurations
            if (clientid == 1)
            {
                checkBalance.directiveTag = "client1-checkbalance";
                checkBalance.controller = "Client1Checkbalance";

            }
            else
            {
                checkBalance.directiveTag = "check-balance";
                checkBalance.controller = "CheckBalance";
            }

            checkBalance.accountHolderLabel = "Accout Holder name (en)";
            checkBalance.title = "Check balance (en)";

            //The below condition will be fetched from db
            if (lang == "fr")
            {
                checkBalance.accountHolderLabel = "Accout Holder name (fr)";
                checkBalance.title = "Check balance (fr)";
            }
            else if (lang == "es")
            {
                checkBalance.accountHolderLabel = "Accout Holder name (es)";
                checkBalance.title = "Check balance (es)";
            }

            return View(checkBalance.controller, checkBalance);
        }

    }
}
