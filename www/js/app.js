/**
 *  @author   Arshan Alam
 *
 * The Recollect application!
 *
 **/
var recollect = angular.module('recollect', ['ionic']);

angular.module('recollect', ['ionic', 'util.camera'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
