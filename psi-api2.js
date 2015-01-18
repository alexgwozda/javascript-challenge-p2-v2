/**
 * @fileoverview
 *
 * Challenge Summary:
 * 'Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.
 * Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.'
*/


/** @namespace psiResults - Provided PSI API results object. */
var psiResults = {
 'kind': 'pagespeedonline#result',
 'id': '/speed/pagespeed',
 'responseCode': 200,
 'title': 'PageSpeed Home',
 'score': 90,
 'pageStats': {
  'numberResources': 22,
  'numberHosts': 7,
  'totalRequestBytes': '2761',
  'numberStaticResources': 16,
  'htmlResponseBytes': '91981',
  'cssResponseBytes': '37728',
  'imageResponseBytes': '13909',
  'javascriptResponseBytes': '247214',
  'otherResponseBytes': '8804',
  'numberJsResources': 6,
  'numberCssResources': 2
 },
 'formattedResults': {
  'locale': 'en_US',
  'ruleResults': {
   'AvoidBadRequests': {
    'localizedRuleName': 'Avoid bad requests',
    'ruleImpact': 0.0
   },
   'MinifyJavaScript': {
    'localizedRuleName': 'Minify JavaScript',
    'ruleImpact': 0.1417,
    'urlBlocks': [
     {
      'header': {
       'format': 'Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).',
       'args': [
        {
         'type': 'BYTES',
         'value': '1.3KiB'
        },
        {
         'type': 'INT_LITERAL',
         'value': '0'
        }
       ]
      },
      'urls': [
       {
        'result': {
         'format': 'Minifying $1 could save $2 ($3% reduction).',
         'args': [
          {
           'type': 'URL',
           'value': 'http://code.google.com/js/codesite_tail.pack.04102009.js'
          },
          {
           'type': 'BYTES',
           'value': '717B'
          },
          {
           'type': 'INT_LITERAL',
           'value': '1'
          }
         ]
        }
       },

       {
        'result': {
         'format': 'Minifying $1 could save $2 ($3% reduction).',
         'args': [
          {
           'type': 'URL',
           'value': 'http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js'
          },
          {
           'type': 'BYTES',
           'value': '258B'
          },
          {
           'type': 'INT_LITERAL',
           'value': '0'
          }
         ]
        }
       }
      ]
     }
    ]
   },

   'SpriteImages': {
    'localizedRuleName': 'Combine images into CSS sprites',
    'ruleImpact': 0.0
   }
  }
 },
 'version': {
  'major': 1,
  'minor': 11
 }
};



/**
 * Iterate through each property name, and total the bytes from countBytes() helper function.
 *
 * @param {object} results - Take in API results object.
 * @returns {number} byteTotal - Byte total to output.
 */
function totalBytes(results) {
  var byteTotal = 0;
  var propNames = Object.getOwnPropertyNames(results.pageStats);
  for (var i = 0; i < propNames.length; i++) {
    byteTotal += countBytes(i, propNames, results);
  }
  return byteTotal;
}

/**
 * Helper function:  if any property name includes the string 'Bytes', return that property's number value.
 *
 * @param {number} i - index value to iterate through properties
 * @param {array} propNames - the array of property names
 * @returns {number} byteCount - the number value of that property (in bytes).
 */
function countBytes(i, propNames, results) {
  /** Reset variables */
  var byteProp = '';
  var byteCount = 0;

  if (propNames[i].indexOf('Bytes') !== -1) {
    byteProp = propNames[i];
    byteCount = parseInt(results.pageStats[byteProp]);
  }
  return byteCount;
}

/**
 * Iterate through API results to find and push all localizedRuleNames, then return an array of their string values.
 *
 * @param {object} results - Take in API results object.
 * @returns {array} ruleNames - Output list of all API localized rule names.
 */
function ruleList(results) {
  var ruleNames = [];
  for (var key in results.formattedResults.ruleResults) {
    ruleNames.push(results.formattedResults.ruleResults[key].localizedRuleName);
  }
  return ruleNames;
}

/** Log the results! */
function output() {
  console.log(totalBytes(psiResults));
  console.log(ruleList(psiResults));
}
output();