
angular.module('recollect')

.controller('setCtl', [
  '$scope', '$ionicModal', '$timeout', 'ngFB', '$localstorage', '$state', 
  function ($scope, $ionicModal, $timeout, ngFB, $localstorage, $state) {
  $scope.fbLogin = function () {
    ngFB.login({scope: 'email,publish_actions'}).then(
      function (response) {
        if (response.status === 'connected') {
          alert('Facebook login succeeded');
          $localstorage.set("facebook", true);
          $state.go('app.home');
        } else {
          alert('Facebook login failed');
        }
      });
  };
}]);
