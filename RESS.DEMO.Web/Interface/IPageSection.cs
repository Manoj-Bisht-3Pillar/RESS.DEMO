using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESS.DEMO.Web.Interface
{
    public interface IPageSection
    {
        IList<BusinessFunction> Function{get;set;}
    }
}