using RESS.DEMO.Web.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESS.DEMO.Web.Models
{
    public interface IPage
    {
        IPageSection Header { get; set; }
        IPageSection Body { get; set; }
        IPageSection Footer { get; set; }
    }
}