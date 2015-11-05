(function () {

  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$rootScope', '$location', '$auth'];

  function MainController ($rootScope, $location, $auth) {

    var model = {};

    angular.extend(this, {
      model: model
    });
  }

})();