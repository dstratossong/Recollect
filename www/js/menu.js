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
    {'name': 'Showcase', 'state': 'app.showcase'}, 
    {'name': 'Capture', 'state': 'app.home', 'clickHandler': 'getPhoto()'}
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
      alert("Error! " + error);
    });
  };

}]);
