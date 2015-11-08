
angular.module('util.storage', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    getArray: function(key) {
      return JSON.parse($window.localStorage[key] || '[]');
    },
    pushObject: function(key, object) {
      var theArray = JSON.parse($window.localStorage[key] || '[]');
      theArray.push(object);
      $window.localStorage[key] = JSON.stringify(theArray);
    },
    unshiftObject: function(key, object) {
      var theArray = JSON.parse($window.localStorage[key] || '[]');
      theArray.unshift(object);
      $window.localStorage[key] = JSON.stringify(theArray);
    }
  }
}]);
