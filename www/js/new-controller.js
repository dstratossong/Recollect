
angular.module('recollect')

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('NewCtrl', function ($scope, Camera) {

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
});
