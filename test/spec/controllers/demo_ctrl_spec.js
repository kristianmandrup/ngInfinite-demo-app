'use strict';

// var expect = chai.expect;

describe('Controller: DemoCtrl', function () {

  // load the controller's module
  beforeEach(module('ngInfiniteApp'));

  var DemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemoCtrl = $controller('DemoCtrl', {
      $scope: scope
    });
  }));

    it('expect works', function () {
        expect(1).toEqual(1);
    });


    it('should have a scope', function () {
        expect(scope).toBeDefined();
    });


    it('scope has images', function () {
      expect(scope.images).toBeDefined();
    });


    it('list of 8 images', function () {
    expect(scope.images.length).toBe(8);
  });

});
