angular.module('example', ['picker'])

.controller('ExampleController', function() {

  $scope.select = function(color) {
    console.log(color);
  };

});
