/**
 *  @author   Arshan Alam
 *
 * The slideshow controller
 *
 **/
angular.module('recollect').controller("slideshow", ["$scope", function($scope) {

  var IMG_CHANGE_TIME = 3500;   // milliseconds
  var curImageIndex = 0;
  var $img = $("#slideImg");

  $scope.imageArray = [{
    'src' : 'img/01.jpg',
    'caption' : 'Caption 1'
  },
  {
    'src' : 'img/02.jpg',
    'caption' : 'Caption 2'
  },
    {
      'src' : 'img/03.jpg',
      'caption' : 'Caption 3'
    },
    {
      'src' : 'img/04.jpg',
      'caption' : 'Caption 4'
    }
  ];

  function changeImage() {
    if(curImageIndex > $scope.imageArray.length) {
      curImageIndex = 0;
    }
    var imgObj = $scope.imageArray[curImageIndex++];
    $img.attr('src', curImageIndex.src);
    console.log("here");
  }

  setInterval(changeImage, IMG_CHANGE_TIME);

  changeImage();
}]);
