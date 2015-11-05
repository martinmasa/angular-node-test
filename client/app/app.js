(function () {

  'use strict';

  angular
    .module('app', ['ngRoute', 'ngStorage' ,'satellizer'])
    .config(['$routeProvider', '$authProvider', config])
    .run(['$rootScope', '$localStorage', '$auth', run]);

  function config ($routeProvider, $authProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainController',
        controllerAs: 'mainvm',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .when('/login', {
        templateUrl: 'auth/login.form.html',
        controller: 'LoginController',
        controllerAs: 'authvm',
        resolve: {
          redirectIfLoggedIn: redirectIfLoggedIn
        }
      })
      .when('/logout', {
        template: null,
        controller: 'LogoutController'
      });

    // satellizer configuration
    $authProvider.loginUrl = '/api/authenticate';
  }

  function run ($rootScope, $localStorage, $auth) {
    // set currentUser in $rootScope when app is initialised (to handle web page refresh)
    if ($auth.isAuthenticated()) {
      $rootScope.currentUser = $localStorage.currentUser;
    }
  }

  function loginRequired ($auth, $location) {
    if(!$auth.isAuthenticated()){
      $location.path('/login');
    }
  }

  function redirectIfLoggedIn ($auth, $location) {
    if($auth.isAuthenticated()){
      $location.path('/');
    }
  }

})();