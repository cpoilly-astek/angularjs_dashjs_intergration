'use strict';

/**
 * @ngdoc function
 * @name transperfectDashjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transperfectDashjsApp
 */
angular.module('transperfectDashjsApp')
  .controller('MainCtrl', function () {
    window.init();

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
