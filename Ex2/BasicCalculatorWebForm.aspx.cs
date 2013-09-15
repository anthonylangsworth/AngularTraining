using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AngularTraining
{
    public partial class BasicCalculatorWebForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnOK_OnClick(object sender, EventArgs e)
        {
            lblSum.Text = "Sum: " + (Decimal.Parse(txtAddend1.Text) + Decimal.Parse(txtAddend2.Text)).ToString();
        }
    }
}