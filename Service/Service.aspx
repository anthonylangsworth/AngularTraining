<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Service.aspx.cs" Inherits="AngularTraining.Service.Service" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Weather</title>
    <link rel="stylesheet" href="../Content/bootstrap.css"/>
    <script type="text/javascript" src="../Scripts/angular.js"></script>
    <script type="text/javascript" src="Service.js"></script>
</head>
<body ng-app="weather" ng-controller="WeatherController" style="margin: 100px">
    <h1>Weather</h1>
    <form id="form1" runat="server">
        <select ng-model="selectedCity" ng-options="city for city in cities"> </select>
        <input type="button" ng-click="updateWeather()" ng-disabled="calling" value="Get Forecast"/> <br/><br/>
        <div>Temperature: {{temp}}</div>
        <div>Weather: {{weather}}</div>
    </form>
</body>
</html>
