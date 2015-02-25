restaurantPricing.controller('PizzaCtrl', function PizzaCtrl($scope, CashRegisterFactory){
  $scope.CashRegisterFactory = CashRegisterFactory;

  $scope.qty = 0;
  $scope.cost = 3.50.toFixed(2);
  $scope.total = 0.00.toFixed(2);

  $scope.addSlice = function() {
    $scope.qty++;
  };
  $scope.removeSlice = function() {
    $scope.qty <= 0 ? $scope.qty = 0 : $scope.qty--;
  };
  $scope.getSliceTotal = function() {
    $scope.total = $scope.CashRegisterFactory.updateTotal($scope.qty, $scope.cost).toFixed(2);
  };

});
