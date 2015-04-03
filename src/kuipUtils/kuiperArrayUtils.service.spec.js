/*jshint camelcase:false */
describe('kuiperUtils', function () {
  'use strict';
  beforeEach(module('kuiperUtils'));

  var kuiperArrayUtils;

  beforeEach(inject(function (_kuiperArrayUtils_) {
    kuiperArrayUtils = _kuiperArrayUtils_;
  }));

  // objects for identity / equality checks
  var x10_A = {x: 10};
  var x10_2 = {x: 10};
  var x10_3 = {x: 10};
  var x12 = {x: 12};

  describe('inArray', function () {
    it('checks if an element is in an array', function () {
      expect(kuiperArrayUtils.inArray(0, [0, 1, 2])).toEqual(true);
    });

    it('checks if an identical object is in an array', function () {
      expect(kuiperArrayUtils.inArray(x10_A, [x10_3, x10_2, x10_A, x12])).toEqual(true);
      expect(kuiperArrayUtils.inArray(x10_A, [x10_A, x10_A, x10_A, x10_A])).toEqual(true);
      expect(kuiperArrayUtils.inArray(x10_A, [x10_3, x10_2, x12])).toEqual(false);
    });

    it('checks if an identical object is in an array', function () {
      // just identify but with explicit parameter
      expect(kuiperArrayUtils.inArray(x10_A, [x10_A], false)).toEqual(true);

      // equals check for identical object
      expect(kuiperArrayUtils.inArray(x10_A, [x10_A], true)).toEqual(true);

      // equals for non identical but equal objects
      expect(kuiperArrayUtils.inArray(x10_A, [x10_2], true)).toEqual(true);
      expect(kuiperArrayUtils.inArray(x10_A, [x12, x10_2, x12], true)).toEqual(true);

      // equals for non identical and non equal
      expect(kuiperArrayUtils.inArray(x10_A, [x12], true)).toEqual(false);
    });
  });
});
