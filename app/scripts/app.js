'use strict';

/**
 * @ngdoc overview
 * @name transperfectDashjsApp
 * @description
 * # transperfectDashjsApp
 *
 * Main module of the application.
 */
angular
  .module('transperfectDashjsApp', [
    'ngAnimate',
    //'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    //'ngSanitize',
    'ngTouch'
  ])

  .run(function ($rootScope, $location) {

    /* Highlight appropriate tabs */
    $rootScope.$on("$locationChangeStart", function () {
      // handle route changes
      var list = document.querySelectorAll('.tab_item');

      var hash = $location.path();

      for (var i = 0; i < list.length; ++i) {

        var tabId = list[i].attributes[0].nodeValue.substring(4);

        if (hash.includes(tabId)) {
          list[i].classList.add('active');
        }
        else if (hash === "/" && tabId === "home") {
          list[i].classList.add('active');
        }
        else {
          list[i].classList.remove('active');
        }
      }
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
