// Get the angular module (this application)
var module = angular.module(
    "presentation",               // Module name
    []                            // No dependencies on other modules
);

// Add or remove slides by adding them to the array below. 
// Use this rather than a global variable to allow easier
// testing. Constants can also be referenced duing config()
// (see below).
module.constant('slides', [
    {
        title: "Basic Calculator (AngularJS)",
        url: "Ex1/BasicCalculator.html"
    },
    {
        title: "Basic Calculator (Web Forms)",
        url: "Ex2/BasicCalculatorWebForm.aspx"
    }
]);

// Configure routes
//
// Note that 'config' occurs early in the initialization process
// and most services are not available. Constants, such as 'slides',
// and dependencies on other modules, such as '$routeProvider', are
// the exceptions. See http://docs.angularjs.org/guide/module for
// more information.
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
        $scope.$parent.title = "Presentation Title";
    } else {
        $scope.$parent.title = slides[parseInt($routeParams.slideIndex) - 1].title;
    }
}