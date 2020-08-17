// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'object') {
    const results = [];
    let joinedResults;
    if (Array.isArray(obj)) {
      obj.forEach(function(element) {
        if (!(typeof element === 'function') && !(element === undefined)) {
          results.push(stringifyJSON(element));
        }
      });

      joinedResults = '[' + results.join(',') + ']';
    } else {
      for (var key in obj) {
        if (!(typeof obj[key] === 'function') && !(obj[key] === undefined)) {
          results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      joinedResults = '{' + results.join(',') + '}';
    }
    return joinedResults;
  }
  // base case
  return '' + obj;
};
