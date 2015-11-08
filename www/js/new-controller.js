
angular.module('recollect')

.controller('newCtl', ['$scope', '$localstorage', '$state', 
                       function ($scope, $localstorage, $state) {

  $scope.newPhoto = $localstorage.get("new-photo");

  $scope.expandText = function () {
    var element = document.getElementById("growing-textarea");
    element.style.height = element.scrollHeight + "px";
  };

  $scope.createMemory = function (memory) {
    $localstorage.unshiftObject("memories", {filename: $scope.newPhoto,
                                          caption: memory.caption});
    $state.go('app.home');
  };

}]);
