'use strict';

angular.module('ngInfiniteApp', ['infinite-scroll', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
        })
        .state('list', {
            url: '/list',
            templateUrl: '../views/demo.html',
            controller: 'DemoCtrl'
        })

  });
