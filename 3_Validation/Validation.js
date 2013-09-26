var module = angular.module(
        "validation.example",  // Name
        []);                   // Dependencies

var regExp = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

module.directive('cbaStaffNumber', function () {                // Called once when the first instance of the directive is parsed.
                                                                // Injection is possible, e.g. pass $http, $timeout, etc
    return function(scope, element, attributes, controller) {   // No injection
        debugger;
        if (regExp.test(element.value)) {
            controller.$setValidity('cbaStaffNumber', true);
            return element;
        } else {
            controller.$setValidity('cbaStaffNumber', true);
            return undefined;
        }
    };
});

// Controller
function ValidationController($scope) {
    // Do nothing
}