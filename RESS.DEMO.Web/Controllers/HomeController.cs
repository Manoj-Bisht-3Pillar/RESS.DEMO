using RESS.DEMO.Web.Interface;
using RESS.DEMO.Web.Models;
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

        public ActionResult HomeBody(int? id)
        {
            IPage page = null;
            BusinessFunction checkBalance = new CheckBalance();
            checkBalance.viewIdentifierByClient = "CheckBalance";
            checkBalance.directiveTag = "check-balance";

            BusinessFunction despositCheck = new DepositCheck();
            despositCheck.viewIdentifierByClient = "DepositCheck";
            despositCheck.directiveTag = "deposit-check";

            BusinessFunction giftCard = new GiftCard();
            giftCard.viewIdentifierByClient = "GiftCard";
            giftCard.directiveTag = "gift-card";

            IPageSection homeBody = new HomeBody();
            List<BusinessFunction> funcs = new List<BusinessFunction>();


            if (id == 1)
            {
                homeBody.Function.Add(checkBalance);
                homeBody.Function.Add(despositCheck);
            }
            else
            {
                homeBody.Function.Add(checkBalance);
                homeBody.Function.Add(despositCheck);
                homeBody.Function.Add(giftCard);
            }
            page = new HomePage(homeBody);
            return View(page);
        }

        public ActionResult CheckBalance()
        {
            //get check balance specific features from backend
            CheckBalance checkBalance = new CheckBalance();
            checkBalance.directiveTag = "check-balance";
            return View("CheckBalance", checkBalance);
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
