using RESS.DEMO.Web.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESS.DEMO.Web.Models
{
    public class HomeBody : IPageSection
    {
         IList<BusinessFunction> businessFunctionList = new List<BusinessFunction>();

        public IList<BusinessFunction> Function
        {
            get
            {
                return businessFunctionList;
            }
            set
            {
                throw new NotImplementedException();
            }
        }
    }
}