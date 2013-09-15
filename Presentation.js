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
        title: "Page 2",
        url: "Ex1/BasicCalculator.html"
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
        $routeProvider.when("/slides/:slideIndex",
        {
            templateUrl: "Slide.html",
            controller: PresentationController
        });
    }
        
    // Add a default route
    $routeProvider.otherwise(
    {
        redirectTo: "/slides/1"
    });
});

// The controller
function PresentationController($scope, $routeParams, $location, slides) {
    // Use an object so the fields are synchronized with the parent scope.
    $scope.presentation = {};
    
    // Set the fields
    if (slides == undefined || slides.length == 0) {      // No slides
        $scope.presentation.currentSlide = 1;
        $scope.presentation.slideCount = 0;
        $scope.presentation.title = "(No Slides)";
    } else if ($routeParams.slideIndex == undefined       // Check whether slideIndex is included in the URL
            || /\D/.test($routeParams.slideIndex)         // Check whether it contanis non-digits
            || parseInt($routeParams.slideIndex) < 1
            || parseInt($routeParams.slideIndex) > slides.length) {      
        $scope.presentation.currentSlide = 1;
        $scope.presentation.slideCount = slides.length;
        $scope.presentation.title = slides[0].title;
    } else {
        $scope.presentation.currentSlide = parseInt($routeParams.slideIndex);
        $scope.presentation.slideCount = slides.length;
        $scope.presentation.title = slides[$scope.presentation.currentSlide - 1].title;
    }

    // True if the current slide is not the first slide in the presentation.
    $scope.canGoBack = function() {
        return $scope.presentation.currentSlide > 1;
    };
    
    // True if the current slide is not the last slide in the presentation.
    $scope.canGoForward = function () {
        return $scope.presentation.currentSlide < slides.length;
    };

    // Go back one slide
    $scope.goBack = function () {
        if (!$scope.canGoBack()) {
            throw new Error("Cannot go back");
        }
        $location.path("/slides/" + ($scope.presentation.currentSlide - 1));
    };

    // Go forward one slide
    $scope.goForward = function () {
        if (!$scope.canGoForward()) {
            throw new Error( "Cannot go forward");
        }   
        $location.path("/slides/" + ($scope.presentation.currentSlide + 1));
    };

}