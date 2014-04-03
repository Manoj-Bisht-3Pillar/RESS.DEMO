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

        public ActionResult Index( int? id)
        {
            IPage page = null;
            if (id == 1)
            {
                BusinessFunction checkBalance = new CheckBalance();
                checkBalance.viewIdentifierByClient = "CheckBalance";

                BusinessFunction despositCheck = new DepositCheck();
                despositCheck.viewIdentifierByClient = "DepositCheck";


                IPageSection homeBody = new HomeBody();
                List<BusinessFunction> funcs = new List<BusinessFunction>();

                homeBody.Function.Add(checkBalance);
                homeBody.Function.Add(despositCheck);

                page = new HomePage(homeBody);

            }
            else
            {
                BusinessFunction checkBalance = new CheckBalance();
                checkBalance.viewIdentifierByClient = "CheckBalance";

                BusinessFunction despositCheck = new DepositCheck();
                despositCheck.viewIdentifierByClient = "DepositCheck";

                BusinessFunction giftCard = new GiftCard();
                giftCard.viewIdentifierByClient = "GiftCard";

                IPageSection homeBody = new HomeBody();
                List<BusinessFunction> funcs = new List<BusinessFunction>();

                homeBody.Function.Add(checkBalance);
                homeBody.Function.Add(despositCheck);
                homeBody.Function.Add(giftCard);

                page = new HomePage(homeBody);
            }
            return View(page);

        }

        public ActionResult HomeBody(int? id)
        {
            IPage page = null;
            if (id == 1)
            {
                BusinessFunction checkBalance = new CheckBalance();
                checkBalance.viewIdentifierByClient = "CheckBalance";

                BusinessFunction despositCheck = new DepositCheck();
                despositCheck.viewIdentifierByClient = "DepositCheck";


                IPageSection homeBody = new HomeBody();
                List<BusinessFunction> funcs = new List<BusinessFunction>();

                homeBody.Function.Add(checkBalance);
                homeBody.Function.Add(despositCheck);

                page = new HomePage(homeBody);

            }
            else
            {
                BusinessFunction checkBalance = new CheckBalance();
                checkBalance.viewIdentifierByClient = "CheckBalance";

                BusinessFunction despositCheck = new DepositCheck();
                despositCheck.viewIdentifierByClient = "DepositCheck";

                BusinessFunction giftCard = new GiftCard();
                giftCard.viewIdentifierByClient = "GiftCard";

                IPageSection homeBody = new HomeBody();
                List<BusinessFunction> funcs = new List<BusinessFunction>();

                homeBody.Function.Add(checkBalance);
                homeBody.Function.Add(despositCheck);
                homeBody.Function.Add(giftCard);

                page = new HomePage(homeBody);
            }
            return View(page);

        }

        public ActionResult CheckBalance()
        {

            return View("CheckBalance");
        }


        public ActionResult DepositCheck()
        {

            return View("DepositCheck");
        }


        public ActionResult GiftCard()
        {

            return View("GiftCard");
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
