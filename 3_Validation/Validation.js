var module = angular.module(
        "validationExample",  // Name
        []);                  // No dependencies

var regExp = /^\d{8}$/;       // 8 digits

module.directive('cbaStaffNumber', function () {                  // Called once when the first instance of the directive is parsed.
                                                                  // Injection is possible, e.g. pass $http, $timeout, etc
    return {
        require: 'ngModel',                                       // Only applied if the "ng-model" attribute/directive is applied and
                                                                  // inject its controller as the fourth argument to the link function.
        link: function (scope, element, attributes, controller) { // No injection. Called once only , not once each time the value is 
                                                                  // changed.
            element.bind("blur", function() {                     // "blur" event = lost focus
                controller.$setValidity(
                    'cbaStaffNumber',                             // Value to set on $error object
                    regExp.test(element[0].value));               // True/false state
                scope.$apply();                                   // Force an update.
            });
        }
    };
});
