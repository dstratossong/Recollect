
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
    if ($localstorage.getObject("facebook")) {
      openFB.api({
        method: 'POST',
        path: '/me/feed',
        params: {
          message: memory.caption,
          // link: 'http://www.example.com/loc8',
          name:'Facebook Api Test '
          // image that share in posted in user timeline
          // picture: $scope.newPhoto
        },
        success: function() {
          alert('Image Successfully shared in facebook');
        },
        error: function (err) {
          alert('Error: ' + err.message);
        }});
    }
    $state.go('app.home');
  };

}]);
