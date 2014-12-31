angular.module('example', ['picker'])

.controller('ExampleController', function($scope) {
  $scope.picked = {};

  $scope.$watch('picked', function() {
    console.log('color changed');
  });

  $scope.select = function(color) {
    console.log('select', color);
    $scope.picked = color;
  };
});
