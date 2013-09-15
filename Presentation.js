// Get the angular module (this application)
var module = angular.module(
    "presentation",               // Module name
    []                            // No dependencies on other modules
);

// I could create  a "slides" service but zall the service would contain is
// data so that is what the $rootScope is for. See "$rootScope exists, 
// but it can be used for evil" at http://docs.angularjs.org/misc/faq.
//module.factory('slides', function() {
//    // Add or remove slides by adding them to the array below 
//    var slidesService = [
//        {
//            title: "Basic Calculator (AngularJS)",
//            url: "Ex1/BasicCalculator.html"
//        },
//        {
//            title: "Basic Calculator (Web Forms)",
//            url: "Ex1/BasicCalculatorWebForm.aspx"
//        }
//    ];

//    return slidesService;
//});

// Add or remove slides by adding them to the array below. 
// Use this rather than a global variable to allow easier
// testing.
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
        $scope.title = "Presentation Title";
    } else {
        $scope.title = slides[$routeParams.slideIndex].title;
    }
}