// Get the angular module (this application)
var module = angular.module(
    "presentation",               // Module name
    []                            // No dependencies on other modules
);

// Create a "slides" service
module.factory('slides', function() {
    // Add or remove slides by adding them to the array below 
    var slidesService = [
        {
            title: "Basic Calculator (AngularJS)",
            url: "Ex1/BasicCalculator.html"
        },
        {
            title: "Basic Calculator (Web Forms)",
            url: "Ex1/BasicCalculatorWebForm.aspx"
        }
    ];

    return slidesService;
});

// Configure routes
module.config(function ($routeProvider, slides) {
    // Add each slide
    for (var i = 0; i < slides.length; i++) {
        $routeProvider.when("/slides/:slideIndex", {
            templateUrl: slides[i].url,
            controller: PresentationController
        });
    }
        
    // Add a default route
    $routeProvider.otherwise({ redirectTo: "/slides/1" });
});

// The controller

function PresentationController($scope, $routeParams, slides) {
    if ($routeParams.slideIndex == undefined) {
        $scope.title = "Presentation Title";
    } else {
        $scope.title = slides[$routeParams.slideIndex].title;
    }
}