/**
 *  @author   Arshan Alam
 *
 * The slideshow controller
 *
 **/
angular.module('recollect')

.controller("slideshow", ["$scope", "Interval", "$localstorage", 
                          function ($scope, Interval, $localstorage) {
  

  $scope.imageArray = $localstorage.getArray("memories");

  var changeImageWrapper = function () {
    var index = 0;
    var length = $scope.imageArray.length;

    var changeImage = function () {
      if (index >= length) {
        index -= length;
      }

      var image = document.getElementById('image-showcasing');
      var caption = document.getElementById('caption-showcasing');

      image.style.backgroundImage = "url('" + $scope.imageArray[index].filename + "')";
      caption.innerHTML = $scope.imageArray[index].caption;

      index += 1;
    };

    return changeImage;
  };

  changeImageWrapper()();
  Interval.stopClock();
  Interval.startClock(changeImageWrapper());


}]);
