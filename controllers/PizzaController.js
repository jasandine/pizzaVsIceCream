restaurantPricing.controller('PizzaCtrl', function PizzaCtrl($scope, CashRegisterFactory){
  $scope.slices = CashRegisterFactory.slices;
  $scope.CashRegisterFactory = CashRegisterFactory;
});
