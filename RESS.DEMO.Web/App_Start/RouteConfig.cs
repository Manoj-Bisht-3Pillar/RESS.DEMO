﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace RESS.DEMO.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Main", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
            name: "BussFunction",
            url: "{controller}/{action}/{clientid}/{lang}",
            defaults: new { controller = "Home", action = "CheckBalance", clientid = UrlParameter.Optional, lang=UrlParameter.Optional }
            );
        }
    }
}