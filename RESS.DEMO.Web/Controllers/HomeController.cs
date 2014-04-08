using RESS.DEMO.Web.Interface;
using RESS.DEMO.Web.Models;
using RESS.DEMO.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RESS.DEMO.Web.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index(int? id)
        {
            IPage page = null;
            return View(page);
        }

        //public ActionResult Index(int? id)
        //{
        //    if (!id.HasValue)
        //    {
        //        id = 1;
        //    }

        //    IPage page = null;
        //    BusinessFunctionServices businessService = new BusinessFunctionServices();
        //    TenantBusinessFunction tenantBusinessFunction = businessService.GetTenantBusinessFunction(id);
        //    IPageSection homeBody = new HomeBody();
        //    homeBody.Function = tenantBusinessFunction.tenantBusinessFunctions;
        //    page = new HomePage(homeBody);
        //    return View(page);
        //}

        public ActionResult HomeBody(int? id)
        {
            if (!id.HasValue)
            {
                id = 1;
            }

            IPage page = null;
            BusinessFunctionServices businessService = new BusinessFunctionServices();
            TenantBusinessFunction tenantBusinessFunction = businessService.GetTenantBusinessFunctions(id);
            IPageSection homeBody = new HomeBody();
            homeBody.Function = tenantBusinessFunction.tenantBusinessFunctions;
            page = new HomePage(homeBody);
            return View(page);
        }

        public ActionResult CheckBalance(int? clientid, string lang)
        {
            if (!clientid.HasValue)
            {
                clientid = 1;
            }

            if (string.IsNullOrEmpty(lang))
            {
                lang ="en";
            }


            //get check balance specific features from backend
            CheckBalanceServices checkBalanceService = new CheckBalanceServices();
            CheckBalance checkBalance = checkBalanceService.GetContent(clientid, lang);

            return View(checkBalance.controller, checkBalance);
        }


        public ActionResult DepositCheck()
        {
            DepositCheck depositCheck = new DepositCheck();
            depositCheck.directiveTag = "deposit-check";
            return View("DepositCheck", depositCheck);
        }


        public ActionResult GiftCard()
        {
            GiftCard giftCard = new GiftCard();
            giftCard.directiveTag = "gift-card";
            return View("GiftCard", giftCard);
        }


        //
        // GET: /Home/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Home/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Home/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Home/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Home/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Home/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Home/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
