var url = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=Sydney&format=json&num_of_days=1&key=xjsy6p5paqbkspugq85m7zs9";

angular.module("weather", ["weather.services"]);

angular.module("weather.services", [])
    .factory("weatherService", function ($http, $log) {
        return {
            getWeather: function (cityName, scope) {
                $http(
                    {
                        method: "POST",                                  // HTTP verb
                        url: "/Service/Service.aspx/GetWeather",         // Target URL
                        contentType: "application/json; charset=utf-8",  // MIME type of content sent
                        data: { args: { "cityName": cityName } },        // Data to send
                        dataType: "json",                                // Sending JSON
                        accept: "application/json"                       // Except JSON results
                    })
                    .success(function (data, status, headers, config) {
                        var response = angular.fromJson(data.d);         // Like $.parseJSON from JQuery
                        $log.info("Success. Temp: " + response.temp + ", Weather: " + response.weather);
                    })
                    .error(function(data, status, headers, config) {
                        $log.error("Failure!");
                    });
            }
        };
    });

function WeatherController($scope, weatherService) {
    $scope.updateWeather = function() {
        weatherService.getWeather("Sydney");
    };

    $scope.cities = ["Sydney", "Melbourne", "Brisbane"];
    $scope.selectedCity = $scope.cities[0];

    $scope.calling = false;
}