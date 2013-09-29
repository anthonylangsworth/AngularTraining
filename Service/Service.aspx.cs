using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AngularTraining.Service
{
    /// <summary>
    /// Test DTO.
    /// </summary>
    public class Forecast
    {
        public int temp;
        public string weather;
    }

    public class Args
    {
        public string cityName;
    }

    public partial class Service : System.Web.UI.Page
    {
        [WebMethod()]
        public static string GetWeather(Args args)
        {
            // TODO: Check CSRF token

            // NOTE: 
            // 1. Do not use single quotes
            // 2. Ensure all member names are quoted

            DataContractJsonSerializer dataContractJsonSerializer =
                new DataContractJsonSerializer(typeof(Forecast));
            Forecast forecast = new Forecast()
            {
                temp = new Random().Next() % 10 + 20,
                weather = new Random().Next() % 2 == 0 ? "Sunny" : "Rain"
            };
            string result;

            // Wait 1 second
            Thread.Sleep(1000);

            using (MemoryStream memoryStream = new MemoryStream())
            {
                // Serialize
                dataContractJsonSerializer.WriteObject(memoryStream, forecast);
                memoryStream.Flush();

                // Get as a string
                memoryStream.Seek(0, SeekOrigin.Begin);
                using (StreamReader streamReader = new StreamReader(memoryStream))
                {
                    result = streamReader.ReadToEnd();
                }
            }
            return result;
        }
    }
}