/**
 *  @author   Arshan Alam
 *
 * The home menu.
 *
 **/
angular.module('recollect').controller("menuCtl", ["$scope", function($scope) {
  $scope.menuItems = [{
    'name' : 'Present',
    'state': 'app.test'
  }, {
    'name' : "Capture",
    "state": "app.home"
  }];
}]);
