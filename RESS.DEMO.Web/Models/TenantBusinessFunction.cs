﻿using RESS.DEMO.Web.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESS.DEMO.Web.Models
{
    public class TenantBusinessFunction
    {
        public int ClientId;
        public List<BusinessFunction> tenantBusinessFunctions;
    }
}