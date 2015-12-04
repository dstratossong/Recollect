/**
 *  @author   Arshan Alam
 *
 * Create the mapping between ion-views and their respective states
 * using state provider.
 *
 **/
angular.module('recollect')

.config(function($stateProvider, $urlRouterProvider) {

  // The path to the directory that contains all the templates views
  var TEMPLATE_DIR_PATH = "templates/";
  var HOME_ROUTE_URL = "/";

  $stateProvider
    .state('app', {
      abstract: true,
      url: HOME_ROUTE_URL,
      templateUrl: TEMPLATE_DIR_PATH + "app.html"
    })
    .state('app.home', {
      url: "home",
      views: {
        'appView' : {
          templateUrl: TEMPLATE_DIR_PATH + "home.html"
        }
      }
    })
    .state('app.showcase', {
      url: "showcase",
      views: {
        'appView' : {
          templateUrl: TEMPLATE_DIR_PATH + "showcase.html"
        }
      }
    })
    .state('app.new', {
      url: "new",
      views: {
        'appView' : {
          templateUrl: TEMPLATE_DIR_PATH + "new.html"
        }
      }
    })
    .state('app.about', {
      url: "about",
      views: {
        'appView' : {
          templateUrl: TEMPLATE_DIR_PATH + "about.html"
        }
      }
    })
    .state('app.settings', {
      url: "settings",
      views: {
        'appView' : {
          templateUrl: TEMPLATE_DIR_PATH + "settings.html"
        }
      }
    });
    
  $urlRouterProvider.otherwise(HOME_ROUTE_URL + "home");

});
