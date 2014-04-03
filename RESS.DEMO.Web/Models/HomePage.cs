using RESS.DEMO.Web.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESS.DEMO.Web.Models
{
    public class HomePage : IPage
    {
        IPageSection body;

        public HomePage(IPageSection body)
        {
            this.body = body;
        }

        public IPageSection Header
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public IPageSection Body
        {
            get
            {
                return this.body;
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public IPageSection Footer
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }
    }
}