restaurantPricing.factory('CashRegisterFactory', function CashRegisterFactory() {
  var factory = {};

  factory.updateTotal = function(qty, cost) {
    return qty * cost;
  };

  return factory;
});
