using RESS.DEMO.Web.Interface;
using RESS.DEMO.Web.Services;
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
            if (!clientid.HasValue)
            {
                clientid = 1;
            }

            if (string.IsNullOrEmpty(lang))
            {
                lang = "en";
            }


            //get check balance specific features from backend
            CheckBalanceServices checkBalanceService = new CheckBalanceServices();
            CheckBalance checkBalance = checkBalanceService.GetContent(clientid, lang);

            return View(checkBalance.controller, checkBalance);
        }

    }
}
