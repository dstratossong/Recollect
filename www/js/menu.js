/**
 *  @author   Arshan Alam
 *
 * The home menu.
 *
 **/
angular.module('recollect')

.controller("menuCtl", ["$scope", "Camera", "$localstorage", "$state", 
                        function($scope, Camera, $localstorage, $state) {

  $scope.menuItems = [
    {'name': 'Showcase', 'state': 'app.showcase', 'iconClass': 'ion-play'}, 
    {'name': 'Capture', 'state': 'app.home', 'iconClass': 'ion-camera', 'clickHandler': 'getPhoto()'},
    {'name': 'Settings', 'state': 'app.settings', 'iconClass': 'ion-gear-b'}
  ];

  $scope.getPhoto = function () {
    var options = {
      correctOrientation: true,
      saveToPhotoAlbum: true
    };

    Camera.getPicture(options)
          .then(function (imageURI) {
      $localstorage.set('new-photo', imageURI);
      $state.go("app.new");
    }, function (error) {
      // alert("Error! " + error);
    });
  };

}]);
