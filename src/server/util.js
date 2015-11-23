var R = require('ramda');

var queryify = R.compose(R.join('&'), R.map(R.join('=')), R.toPairs);

var mergeObj = R.merge;

module.exports = {
    queryify: queryify,
    merge: R.merge
};