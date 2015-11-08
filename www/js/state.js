/**
 *  @author   Arshan Alam
 *
 * Create the mapping between ion-views and their respective states
 * using state provider.
 *
 **/
angular.module('recollect').config(function($stateProvider, $urlRouterProvider) {

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
    .state('app.test', {
      url: "test",
      views: {
        'appView' : {
          templateUrl: TEMPLATE_DIR_PATH + "test.html"
        }
      }
    });



  /*


  $stateProvider
    .state('home', {
      url: HOME_ROUTE_URL,
      templateUrl: TEMPLATE_DIR_PATH + "home.html"

    })
    .state('settings', {
      url: HOME_ROUTE_URL,
      templateUrl: TEMPLATE_DIR_PATH + "app.html"

    });

*/
  // if the templates to b;;e routed to
  $urlRouterProvider.otherwise(HOME_ROUTE_URL + "home");

});
