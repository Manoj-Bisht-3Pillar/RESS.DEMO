using System.Web;
using System.Web.Optimization;

namespace RESS.DEMO.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/lib/jquery/jquery.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/lib/jqueryui/ui/minified/jquery-ui.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.unobtrusive*",
            //            "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/lib/modernizr/modernizr.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/lib/angular/angular.js",
                        "~/lib/angular-animate/angular-animate.js",
                        "~/lib/angular-route/angular-route.js",
                        "~/lib/angular-resource/angular-resource.js"                        
                        ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/animations").Include(
                       "~/Scripts/animations.js"));

            bundles.Add(new ScriptBundle("~/bundles/controllers").Include(
                       "~/Scripts/controllers.js"));

            bundles.Add(new ScriptBundle("~/bundles/commonControllers").Include(
                       "~/Scripts/commonController/commonControllers.js"));

            bundles.Add(new ScriptBundle("~/bundles/filters").Include(
                       "~/Scripts/filters.js"));

            bundles.Add(new ScriptBundle("~/bundles/services").Include(
                       "~/Scripts/services.js"));

            bundles.Add(new ScriptBundle("~/bundles/directives").Include(
                       "~/Scripts/directives.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/checkBalance").Include(
                        "~/Scripts/CheckBalance/checkBalanceDirective.js",
                        "~/Scripts/CheckBalance/checkBalanceController.js",
                        "~/Scripts/CheckBalance/checkBalanceServices.js",
                        "~/Scripts/CheckBalance/client1CheckBalanceDirective.js"
                        ));
            
            bundles.Add(new ScriptBundle("~/bundles/giftSend").Include(
                        "~/Scripts/Gift/giftManagerDirective.js"));

            bundles.Add(new ScriptBundle("~/bundles/depositCheck").Include(
                        "~/Scripts/DepositCheck/depositCheckDirective.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            //bundles.Add(new StyleBundle("~/Content/themes/base/css  ").Include(
            //            "~/lib/jqueryui/base/jquery.ui.core.css",
            //            "~/lib/jqueryui/base/jquery.ui.resizable.css",
            //            "~/lib/jqueryui/base/jquery.ui.selectable.css",
            //            "~/lib/jqueryui/base/jquery.ui.accordion.css",
            //            "~/lib/jqueryui/base/jquery.ui.autocomplete.css",
            //            "~/lib/jqueryui/base/jquery.ui.button.css",
            //            "~/lib/jqueryui/base/jquery.ui.dialog.css",
            //            "~/lib/jqueryui/base/jquery.ui.slider.css",
            //            "~/lib/jqueryui/base/jquery.ui.tabs.css",
            //            "~/lib/jqueryui/base/jquery.ui.datepicker.css",
            //            "~/lib/jqueryui/base/jquery.ui.progressbar.css",
            //            "~/lib/jqueryui/base/jquery.ui.theme.css"));
        }
    }
}