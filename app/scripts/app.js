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
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    'ngMaterial'
  ])

  .config(function ($mdThemingProvider) {

    var customPrimary = {
      '50': '#c7e7c5',
      '100': '#b5e0b3',
      '200': '#a4d8a1',
      '300': '#92d18f',
      '400': '#81c97d',
      '500': '#6FC26B',
      '600': '#5dbb59',
      '700': '#4eb149',
      '800': '#469f42',
      '900': '#3e8d3a',
      'A100': '#d8efd7',
      'A200': '#eaf6e9',
      'A400': '#fcfefb',
      'A700': '#367b33'
    };
    $mdThemingProvider
      .definePalette('customPrimary',
      customPrimary);

    var customAccent = {
      '50': '#000000',
      '100': '#000000',
      '200': '#000000',
      '300': '#000000',
      '400': '#020f0f',
      '500': '#042625',
      '600': '#0a5451',
      '700': '#0c6b67',
      '800': '#0f827d',
      '900': '#119893',
      'A100': '#0a5451',
      'A200': '#073D3B',
      'A400': '#042625',
      'A700': '#14afaa'
    };
    $mdThemingProvider
      .definePalette('customAccent',
      customAccent);

    var customWarn = {
      '50': '#d7888a',
      '100': '#d17577',
      '200': '#cb6265',
      '300': '#c44f52',
      '400': '#bb3e42',
      '500': '#A8383B',
      '600': '#953234',
      '700': '#822b2e',
      '800': '#6f2527',
      '900': '#5b1e20',
      'A100': '#de9b9d',
      'A200': '#e4aeb0',
      'A400': '#eac1c3',
      'A700': '#481819'
    };
    $mdThemingProvider
      .definePalette('customWarn',
      customWarn);

    var customBackground = {
      '50': '#fbfbfb',
      '100': '#eeeeee',
      '200': '#e1e1e1',
      '300': '#d4d4d4',
      '400': '#c8c8c8',
      '500': '#BBB',
      '600': '#aeaeae',
      '700': '#a1a1a1',
      '800': '#959595',
      '900': '#888888',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#ffffff',
      'A700': '#7b7b7b'
    };
    $mdThemingProvider
      .definePalette('customBackground',
      customBackground);

    $mdThemingProvider.theme('default')
      .primaryPalette('customPrimary')
      .accentPalette('customAccent')
      .warnPalette('customWarn')
      .backgroundPalette('customBackground')
  })

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
