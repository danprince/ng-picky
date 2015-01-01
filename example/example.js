angular.module('example', ['picker'])

.controller('ExampleController', function($scope) {
  $scope.picked = undefined;

  $scope.$watch('picked', function() {
    console.log('Pick', $scope.picked);
  });

  $scope.select = function(color) {
    $scope.picked = color;
  };
});
