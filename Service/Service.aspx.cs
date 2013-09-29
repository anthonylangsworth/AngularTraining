using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AngularTraining.Service
{
    public partial class Service : System.Web.UI.Page
    {
        [WebMethod()]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static string GetWeather()
        {
            // TODO: Check CSRF token

            // NOTE: 
            // 1. Do not use single quotes
            // 2. Ensure all member names are quoted
            return "{ \"temp\": 26, \"weather\": \"sunny\" }";
        }
    }
}