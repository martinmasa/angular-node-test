(function () {

  'use strict';

  angular
    .module('app')
    .factory('AuthLog', AuthLog);

  AuthLog.$inject = ['$http'];

  function AuthLog ($http) {

    return {
      getLogs: getLogs
    };

    function getLogs () {
      return $http.get('/api/admin/authlogs');
    }
  }

})();