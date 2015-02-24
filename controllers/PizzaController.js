restaurantPricing.controller('PizzaCtrl', function PizzaCtrl($scope){
  $scope.slices = 0;
  $scope.addSlice = function() {
    $scope.slices++;
  };
  $scope.removeSlice = function() {
    $scope.slices <= 0 ? $scope.slices = 0 : $scope.slices--;
  };
});
