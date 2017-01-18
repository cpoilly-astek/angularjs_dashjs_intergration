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

    // init is defined in dash-custom.js
    window.dash.init();

    // simulate click so that video is loaded when entering screen
    var btnLoad = window.document.querySelector('#btnLoadPlayer');
    if (btnLoad) { btnLoad.click(); }
    else { window.dash.load(this); }

  });
