restaurantPricing.factory('CashRegisterFactory', function CashRegisterFactory() {
  var factory = {};
  factory.slices = 0;
  factory.scoops = 0;
  factory.pizzaCost = 3.50.toFixed(2);
  factory.iceCreamCost = 1.50.toFixed(2);
  factory.pizzaTotal = 0.00.toFixed(2);
  factory.iceCreamTotal = 0.00.toFixed(2);

  factory.addSlice = function() {
    factory.slices++;
    factory.pizzaTotal = (factory.pizzaCost * factory.slices).toFixed(2);
  };
  factory.removeSlice = function() {
    factory.slices <= 0 ? factory.slices = 0 : factory.slices--;
    factory.pizzaTotal = (factory.pizzaCost * factory.slices).toFixed(2);
  };

  factory.addScoop = function() {
    factory.scoops++;
    factory.iceCreamTotal = (factory.iceCreamCost * factory.scoops).toFixed(2);
  };
  factory.removeScoop = function() {
    factory.scoops <= 0 ? factory.scoops = 0 : factory.scoops--;
    factory.iceCreamTotal = (factory.iceCreamCost * factory.scoops).toFixed(2);
  };

  return factory;
});
