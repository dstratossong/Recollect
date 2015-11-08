
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
    pushObject: function(key, object) {
      var oldArray = JSON.parse($window.localStorage[key] || '[]');
      var newArray = oldArray.push(object);
      $window.localStorage[key] = JSON.stringify(newArray);
    }
  }
}]);
