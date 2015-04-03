angular.module('kuiperUtils').factory('kuiperArrayUtils', function () {
  'use strict';

  /**
   * @ngdoc service
   * @name kuiperUtils.service:kuiperArrayUtils
   *
   * @description
   * Util service to simplify working with arrays.
   *
   */
  return {
    /**
     * @ngdoc function
     * @name kuiperUtils.service:kuiperArrayUtils#inArray
     * @methodOf kuiperUtils.service:kuiperArrayUtils
     * @function
     *
     * @description
     * Returns true, if an identical `element` is in an `array`.
     * The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     * Array.prototype.indexOf} function is used internally unless the optional parameter `objectEquality` is
     * set to `true`.
     *
     * With the optional parameter `objectEquality` objects are compared by equality not identity with the
     * {@link http://code.angularjs.org/1.2.9/docs/api/angular.equals angular.equals} function.             .
     *
     * <pre>
         kuipArrayutils.inArray('a', ['a', 'b', 'c']); // true
     </pre>
     *
     * @param {object} element Element to check
     * @param {Array.<*>} array Array
     * @param {boolean=} [objectEquality=false] If `true` objects are compared by equality not identity.
     * @returns {boolean} Returns `true` if the element is found.
     */
    inArray: function (element, array, objectEquality) {
      var found = array.indexOf(element) >= 0;

      // element found or no object equality checks are needed
      if (found || !objectEquality || !angular.isObject(element)) {
        return found;
      } else {
        // iterate until an equal element is found
        array.some(function (arrayElement) {
          found = angular.equals(element, arrayElement);
          return found;
        });
        return found;
      }
    }
  };
});
