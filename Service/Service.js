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
                        data: {},                                        // Data to send
                        dataType: "json",                                // Sending JSON
                        accept: "application/json"                       // Except JSON results
                    })
                    .success(function (data, status, headers, config) {
                        debugger;
                        var response = eval(data.d);
                        $log.info("Success. Temp: " + response.temp + ", Weather: " + response.weather);
                    })
                    .error(function(data, status, headers, config) {
                        $log.info("Failure: " + data.d);
                    });
            }
        };
    });

function WeatherController($scope, weatherService) {
    $scope.updateWeather = function() {
        weatherService.getWeather("Sydney");
    };
}