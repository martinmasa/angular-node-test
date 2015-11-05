(function () {

  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$rootScope', '$location', '$localStorage', '$auth'];

  function LoginController ($rootScope, $location, $localStorage, $auth) {

    var model = {};

    function login (user) {

      $auth.login(user)
        .then(function (res) {
          $rootScope.currentUser = res.data.user;
          $localStorage.currentUser = res.data.user;
          $location.path('/');
        })
        .catch(function (res) {
          model.error = res.data.message;
        });

    }

    angular.extend(this, {
      model: model,
      login: login
    });
  }

})();