var ep = require('esprima');

// Read in a JS Source file

// Simple AST from a string. 
//   1st param: String (JavaScript)
//   2nd param: config [optional]
//   3rd param: delegate [opt]
var tree = ep.parse('var x=1;', {}, null);

console.log(tree);

console.log('-----');

// For now, let's make a promise: When console says 'OK', user
// knows things went well - at least we reached program end.
console.log('OK');

// Make a syntax tree with Esprima


