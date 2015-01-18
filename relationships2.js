
/**  @fileOverview - Challenge Summary:  Compare two argument input values.  Output which value(s) is/are not numbers, if any. Otherwise, display the relationship if both are numbers.  */

/**
 * Returns whether the value is a number.
 * To avoid isNaN problems, test with isNumber() from: http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
 *
 * @param n - Any number to test
 * @returns {Boolean} - If true, the value is a number.
 */
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Helper function:  Returns appropriate string when one value is not a number.
 *
 * @returns {string}
 */
var oneError = function (notNumber) { 
  return 'Can\'t compare relationships because ' + notNumber + ' is not a number';
};
/**
 * Helper function: Returns appropriate string when both values are not numbers.
 *
 * @returns {string}
 */
var bothError = function(x, y) {
  return 'Can\'t compare relationships because ' + x + ' and ' + y + ' are not numbers';
};

/**
 * Returns error message if one or both values are not numbers.
 * If both are numbers, returns comparison operator relating the numbers.
 *
 * @returns {string} - Error message or comparison operator symbol
 */
function getRelationship(x, y) {
  if (!isNumber(x) && isNumber(y)) {
    return oneError(x);
  }
  else if (!isNumber(y) && isNumber(x)) {
    return oneError(y);
  }
  else if (!isNumber(x) && !isNumber(y)) {
    return bothError(x, y);
  }

  else {
      if (x < y) {
          return '<';
      }
      else if (x > y) {
          return '>';
      }
      else {
          return '=';
      }
  }
}


/** 
 * Some tests for demonstration!
 *
 * @ignore
 */
function tests() {
  var test1 = getRelationship(2, 1);
  console.log('test1: ' + test1);

  var test2 = getRelationship('...', 1);
  console.log('test2: ' + test2);

  var test3 = getRelationship('...', []);
  console.log('test3: ' + test3);

  var test4 = getRelationship(this, 'blue');
  console.log('test4: ' + test4);
}
tests();