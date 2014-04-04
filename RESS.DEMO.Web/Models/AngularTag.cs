using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace RESS.DEMO.Web.Models
{

    public static class AngularTag
    {
        public static MvcHtmlString Directive(string directive)
        {
            StringBuilder directiveTag = new StringBuilder();
            directiveTag.Append("<");
            directiveTag.Append(directive);
            directiveTag.Append(">");

            directiveTag.Append("</");
            directiveTag.Append(directive);
            directiveTag.Append(">");

            return new MvcHtmlString(directiveTag.ToString());
        }
    }
}