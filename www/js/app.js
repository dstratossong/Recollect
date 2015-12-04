/**
 *  @author   Arshan Alam
 *
 * The Recollect application!
 *
 **/
var recollect = angular.module('recollect', ['ionic']);

angular.module('recollect', ['ionic', 
                             'util.camera', 
                             'util.storage', 
                             'util.interval',
                             'ngOpenFB'])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.run(function($ionicPlatform, ngFB) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  ngFB.init({appId: '192732417730429'});
});
