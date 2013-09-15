<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BasicCalculatorWebForm.aspx.cs" Inherits="AngularTraining.BasicCalculatorWebForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Label ID="lblAddend1" runat="server" Text="Addend 1:"></asp:Label>
        <asp:TextBox ID="txtAddend1" runat="server"></asp:TextBox>
        <br/>
        <asp:Label ID="lblAddend2" runat="server" Text="Addend 2:"></asp:Label>
        <asp:TextBox ID="txtAddend2" runat="server"></asp:TextBox>
        <br/>
        <asp:Button ID="btnAdd" Text="Add" runat="server" OnClick="btnOK_OnClick" />
        <br/>
        <asp:Label ID="lblSum" runat="server"></asp:Label>
    </div>
    </form>
</body>
</html>
