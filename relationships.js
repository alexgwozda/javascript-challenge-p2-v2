
/* Challenge Summary:  
 * Compare two argument input values.  
 * Output which value(s) is/are not numbers, if any.
 * Otherwise, display the relationship if both are numbers.
*/

/* Problem Solution */

// To avoid isNaN problems, test with isNumber() from:
// http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getRelationship(x, y) {

  // Helper functions return appropriate error string, called by tests.
  var oneError = function (notNumber) { 
    return "Can\'t compare relationships because " + notNumber + " is not a number";
  };
  var bothError = function(x, y) {
    return "Can\'t compare relationships because " + x + " and " + y + " are not numbers";
  };

  // Test each possible error.
  if (!isNumber(x) && isNumber(y)) {
    return oneError(x);
  }
  else if (!isNumber(y) && isNumber(x)) {
    return oneError(y);
  }
  else if (!isNumber(x) && !isNumber(y)) {
    return bothError(x, y);
  }

  // Return comparison if there are no errors.
  else {
      if (x < y) {
          return "<";
      }
      else if (x > y) {
          return ">";
      }
      else {
          return "=";
      }
  }
}


// Some tests for demonstration!

var test1 = getRelationship(2, 1);
console.log("test1: " + test1);

var test2 = getRelationship("...", 1);
console.log("test2: " + test2);

var test3 = getRelationship("...", []);
console.log("test3: " + test3);

var test4 = getRelationship(this, "blue");
console.log("test4: " + test4);
