using RESS.DEMO.Web.Interface;
using RESS.DEMO.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESS.DEMO.Web.Services
{
    public class BusinessFunctionServices
    {
        private List<BusinessFunction> businessFunctionCollection = new List<BusinessFunction>();
        private List<TenantBusinessFunction> tenantBusinessFunctionList = new List<TenantBusinessFunction>();

        public BusinessFunctionServices()
        {
            BusinessFunction checkBalance = new CheckBalance();
            checkBalance.viewIdentifierByClient = "CheckBalance";
            checkBalance.directiveTag = "check-balance";

            BusinessFunction despositCheck = new DepositCheck();
            despositCheck.viewIdentifierByClient = "DepositCheck";
            despositCheck.directiveTag = "deposit-check";

            BusinessFunction giftCard = new GiftCard();
            giftCard.viewIdentifierByClient = "GiftCard";
            giftCard.directiveTag = "gift-card";

            TenantBusinessFunction tenantFunction1 = new TenantBusinessFunction();
            tenantFunction1.ClientId = 1;
            List<BusinessFunction> clientBusinessFunction1 = new List<BusinessFunction>();
            clientBusinessFunction1.Add(checkBalance);
            clientBusinessFunction1.Add(despositCheck);
            clientBusinessFunction1.Add(giftCard);
            tenantFunction1.tenantBusinessFunctions = clientBusinessFunction1;

            

            TenantBusinessFunction tenantFunction2 = new TenantBusinessFunction();
            tenantFunction2.ClientId = 2;
            List<BusinessFunction> clientBusinessFunction2 = new List<BusinessFunction>();
            clientBusinessFunction2.Add(checkBalance);
            clientBusinessFunction2.Add(despositCheck);
            tenantFunction2.tenantBusinessFunctions = clientBusinessFunction2;

            tenantBusinessFunctionList.Add(tenantFunction1);
            tenantBusinessFunctionList.Add(tenantFunction2);
        }

        public TenantBusinessFunction GetTenantBusinessFunctions(int? clientId)
        {

            return tenantBusinessFunctionList.Single(x => x.ClientId.Equals(clientId));

        }
    }

    public class CheckBalanceServices
    {

        List<CheckBalance> checkBalanceCollection = new List<CheckBalance>();

        public CheckBalanceServices()
        {
            CheckBalance checkBalanceClient1En = new CheckBalance();
            checkBalanceClient1En.title = "Check balance (en)";
            checkBalanceClient1En.accountHolderLabel = "Accout Holder name (en)";
            checkBalanceClient1En.clientId =1;
            checkBalanceCollection.Add(checkBalanceClient1En);

            CheckBalance checkBalanceClient1fr = new CheckBalance();
            checkBalanceClient1fr.title = "Check balance (fr)";
            checkBalanceClient1fr.accountHolderLabel = "Accout Holder name (fr)";
            checkBalanceClient1fr.clientId =1;
            checkBalanceClient1fr.language = "fr";
            checkBalanceCollection.Add(checkBalanceClient1fr);
            

            CheckBalance checkBalanceClient1es = new CheckBalance();
            checkBalanceClient1es.title = "Check balance (es)";
            checkBalanceClient1es.accountHolderLabel = "Accout Holder name (es)";
            checkBalanceClient1es.clientId =1;
            checkBalanceClient1es.language = "es";
            checkBalanceCollection.Add(checkBalanceClient1es);

            CheckBalance checkBalanceClient2En = new CheckBalance();
            checkBalanceClient2En.title = "Check balance (en)";
            checkBalanceClient2En.accountHolderLabel = "Accout Holder name (en)";
            checkBalanceClient2En.clientId =2;
            checkBalanceClient2En.directiveTag ="client1-checkbalance";
            checkBalanceClient2En.controller ="CheckBalance-Layout";
            checkBalanceCollection.Add(checkBalanceClient2En);

            CheckBalance checkBalanceClient2fr = new CheckBalance();
            checkBalanceClient2fr.title = "Check balance (fr)";
            checkBalanceClient2fr.accountHolderLabel = "Accout Holder name (fr)";
            checkBalanceClient2fr.clientId = 2;
            checkBalanceClient2fr.language = "fr";
            checkBalanceClient2fr.directiveTag = "client1-checkbalance";
            checkBalanceClient2fr.controller = "CheckBalance-Layout";
            checkBalanceCollection.Add(checkBalanceClient2fr);

            CheckBalance checkBalanceClient2es = new CheckBalance();
            checkBalanceClient2es.title = "Check balance (es)";
            checkBalanceClient2es.accountHolderLabel = "Accout Holder name (es)";
            checkBalanceClient2es.clientId = 2;
            checkBalanceClient2es.language = "es";
            checkBalanceClient2es.directiveTag = "client1-checkbalance";
            checkBalanceClient2es.controller = "CheckBalance-Layout";
            checkBalanceCollection.Add(checkBalanceClient2es);


        }


        public CheckBalance GetContent(int? clientId, string lang)
        {
            CheckBalance checkBalance = new CheckBalance();

            return checkBalanceCollection.Single(x=> x.clientId.Equals(clientId) && x.language.Equals(lang));

        }
    }
   
}