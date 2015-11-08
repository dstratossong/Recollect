/**
 *  @author   Arshan Alam
 *
 * The slideshow controller
 *
 **/
angular.module('recollect')

.controller("slideshow", ["$scope", "Interval", 
                          function($scope, Interval) {

  $scope.imageArray = [
    {filename: 'img/01.jpg', caption: 'Caption 1'},
    {filename: 'img/02.jpg', caption: 'Caption 2'},
    {filename: 'img/03.jpg', caption: 'Caption 3'},
    {filename: 'img/04.jpg', caption: 'Caption 4'}
  ];

  
}]);
