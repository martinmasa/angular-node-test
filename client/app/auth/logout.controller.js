(function () {

  'use strict';

  angular
    .module('app')
    .controller('LogoutController', LogoutController);

  LogoutController.$inject = ['$rootScope', '$location', '$localStorage', '$auth'];

  function LogoutController ($rootScope, $location, $localStorage, $auth) {

    $auth.logout()
      .then(function () {
        $rootScope.currentUser = null;
        delete $localStorage.currentUser;
        $location.path('/login');
      });

  }

})();