
/** @fileoverview - Challenge Summary:  Alphabetize an array of names by last name, putting last names first. */

/** @global {array} names - Provided array list of names. */
var names = [
  'Neil Armstrong',
  'Buzz Aldrin',
  'Pete Conrad',
  'Alan Bean',
  'Alan Shepard',
  'Edgar Mitchell',
  'David Scott',
  'James Irwin',
  'John W Young',
  'Charles Duke',
  'Eugene Cernan',
  'Harrison Schmitt'
];

/** 
 * 
 */
function alphabetizer(names) {
  var givenNames = [];
  var surNames = [];
  var orderedNames = [];

  for (var i = 0; i < names.length; i++) {
    // Make semantic reference to the last name's index, useful below.
    var lastIndex = names[p].split(' ').length - 1;

    // Split the first name off into givenNames.
    givenNames[p] = splitNames(p, 0);
    
    // If there are any middle names, also concatenate all but the last surname to givenNames.
    if (names[p].length > 2) {
        for (var j = 1; j < lastIndex; j++) {
            givenNames[p] += ' ' + splitNames(p, j);
        }
    }

    // The final name is split off into surNames.  
    surNames[p] = splitNames(p, lastIndex);

    // Reconstruct list of ordered names that begin with surnames.
    orderedNames[p] = [surNames[p], givenNames[p]];
    orderedNames[p] = orderedNames[p].join(', ');
  }

  // Alphabetize!
  orderedNames.sort();
  return orderedNames;
}

// Helper function to automate splitting.
function splitNames(personIndex, nameIndex) {
  return names[personIndex].split(' ')[nameIndex];
}

console.log(alphabetizer(names));
