
angular.module('recollect')

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('NewCtrl', ['$scope', 'Camera', '$localstorage', 
                        function ($scope, Camera, $localstorage) {

});
