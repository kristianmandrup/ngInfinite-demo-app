'use strict';

console.log('ngInfiniteApp config App');

angular.module('ngInfiniteApp', ['infinite-scroll', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl'
      })
  });
