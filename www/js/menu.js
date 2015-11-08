/**
 *  @author   Arshan Alam
 *
 * The home menu.
 *
 **/
angular.module('recollect')
  .controller("menuCtl", ["$scope", "Camera", function($scope, Camera) {
  $scope.menuItems = [{
    'name' : 'Showcase',
    'state': 'app.showcase'
  }, {
    'name' : "Capture",
    "state": "app.home",
    "clickHandler" : "getPhoto()"
  }];

  $scope.getPhoto = function () {
    var options = {
      quality: 50,
      // targetWidth: 320,
      // targetHeight: 320,
      correctOrientation: true,
      saveToPhotoAlbum: true
    };

    Camera.getPicture(options).then(function (imageURI) {
      $scope.lastPhoto = imageURI;
    }, function (err) {
      alert("Error! " + err);
    });
  };

}]);
