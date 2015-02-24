restaurantPricing.controller('IceCreamCtrl', function IceCreamCtrl($scope, CashRegisterFactory) {
  $scope.scoops = CashRegisterFactory.scoops;
  $scope.CashRegisterFactory = CashRegisterFactory;
});
