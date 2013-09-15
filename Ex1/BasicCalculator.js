function BasicCalculator($scope, $log) {
    $scope.addend1 = 5;
    $scope.addend2 = 10;

    $scope.add = function () {
        $scope.sum = parseFloat($scope.addend1) + parseFloat($scope.addend2);
    };
}