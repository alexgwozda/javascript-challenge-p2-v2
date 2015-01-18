
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
 * Split surName off from givenNames (first and any middle).  
 * 
 * @param {array} names
 * @returns {array} orderedNames - alphebetized array by last name.  
 */
function alphabetizer(names) {
  var orderedNames = [];
  var splitNamesLength;
  var lastNameIndex;
  var givenNames = [];
  var surName = [];

  for (var i = 0; i < names.length; i++) {
    splitNamesLength = names[i].split(" ").length;
    lastNameIndex = splitNamesLength - 1;

    /** Variable givenNames only grabs the first name at first */
    givenNames = splitName(i, 0);
    /** Then if there are any middle names, also concatenate all but the last surname to givenNames. */
    if (names[i].length > 2) {
        for (var j = 1; j < lastINamendex; j++) {
            givenNames[i] += " " + splitName(i, j);
        }
    }

    surName[i] = splitName(i, lastNameIndex);
    orderedNames[i] = [surName, givenNames];
    orderedNames[i] = orderedNames[i].join(', ');
  }

  /** Alphabetize! */
  orderedNames.sort();
  return orderedNames;
}

/** 
 * Helper function to automate splitting.
 * 
 * @param personIndex - the person's name to split
 * @param nameIndex - index of the desired part of name for the person.
 * @returns {string} selectedName - the desired part of name requested by the function call
 */
function splitName(personIndex, nameIndex) {
  var selectedName = names[personIndex].split(' ')[nameIndex];
  return selectedName;
}

console.log(alphabetizer(names));
