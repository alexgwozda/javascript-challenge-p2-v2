/* Challenge Summary: 
'Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.

Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.'
*/


/* Provided API object */
var psiResults;

psiResults = {
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


/* Problem Solution */

function totalBytes(results) {
  var byteTotal = 0;
  var byteProp = '';

  var propNames = Object.getOwnPropertyNames(results.pageStats);

  // Semantic helper function to contain checking and totaling. 
  // Check if property name (from results.pageStats) contains 'Bytes'.
  // Where found, its value is a number of bytes. Add it to the total.
  function checkToUpdateTotal(property) {
    if (propNames[property].indexOf('Bytes') !== -1) {
      byteProp = propNames[property];
      byteTotal += parseInt(results.pageStats[byteProp]);
    }
  }

  for (var i = 0; i < propName.length; i++) {
    checkToUpdateTotal(i);
  }
  return byteTotal;
}

// Iterate through ruleResults to find the localizedRuleNames, then  return an array of their strings. 
function ruleList(results) {
  var ruleNames = [];

  // Iterate through each property in ruleResults.
  for (var key in results.formattedResults.ruleResults) {

    // Find and push each localizedRuleName value string to the array.
    ruleNames.push(results.formattedResults.ruleResults[key].localizedRuleName);
  }
  return ruleNames;
}

// Log results!
console.log(totalBytes(psiResults));
console.log(ruleList(psiResults));