restaurantPricing.controller('IceCreamCtrl', function IceCreamCtrl($scope){
  $scope.scoops = 0;
  $scope.addScoop = function() {
    $scope.scoops++;
  };
  $scope.removeScoop = function() {
    $scope.scoops <= 0 ? $scope.scoops = 0 : $scope.scoops--;
  };
});
