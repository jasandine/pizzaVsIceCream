restaurantPricing.controller('IceCreamCtrl', function IceCreamCtrl($scope, CashRegisterFactory) {
  $scope.CashRegisterFactory = CashRegisterFactory;

  $scope.qty = 0;
  $scope.cost = 1.50.toFixed(2);
  $scope.total = 0.00.toFixed(2);

  $scope.addScoop = function() {
    $scope.qty++
  };

  $scope.removeScoop = function() {
    $scope.qty <= 0 ? $scope.qty = 0 : $scope.qty--;
  };

  $scope.getScoopTotal = function() {
    $scope.total = $scope.CashRegisterFactory.updateTotal($scope.qty, $scope.cost).toFixed(2);
  };

});
