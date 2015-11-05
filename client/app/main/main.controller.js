(function () {

  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$rootScope', '$location', '$auth', 'AuthLog'];

  function MainController ($rootScope, $location, $auth, AuthLog) {

    var model = {};
    var user = $rootScope.currentUser;

    if(angular.isArray(user.roles) && user.roles.indexOf('admin') > -1){
      AuthLog
        .getLogs()
        .then(function (response) {
          model.authlogs = response.data;
        })
        .catch(function (response) {
          model.error = response.data.message;
        });
    }

    angular.extend(this, {
      model: model
    });
  }

})();