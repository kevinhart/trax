var request = require('request');
var util = require('./util');
var Promise = require('bluebird');
var R = require('ramda');
var models = require('./models');

Promise.promisifyAll(request);

var STATUSCODE_OK = 0;

var _apiThrowOnError = function _apiThrowOnError(response) {
    if (response.status.code !== STATUSCODE_OK) {
        throw new Error('[' + response.status.code + ']: ' + response.status.message);
    }
    
    return response;
};

var _apiCall = function _apiCall(type, method, options) {
    if (!type) throw new Error('value for \'type\' is required');
    if (!method) throw new Error('value for \'method\' is required');

    options = options || {};
    var url = this.baseUri
        + '/' + type
        + '/' + method
        + '?' + util.queryify(util.merge({ 'api_key': this.key }, options));

    // ignores everything except 'response' property from response object
    return request
        .getAsync(url)
        .then(R.compose(R.prop('response'), JSON.parse, R.prop('body')))
        .then(_apiThrowOnError);
};

var api = {
    key: 'ZVWETG4WVRTKVLNYU',
    baseUri: 'http://developer.echonest.com/api/v4'    
};
api.call = _apiCall.bind(api);

var getFirstSong = R.compose(R.head, R.prop('songs'));

var songDetails = function songDetails(opts) {
    opts = opts || {};
    if (!opts.title || !opts.artist) return Promise.resolve({});        
    
    // TODO: redo
    opts.bucket = 'audio_summary&bucket=tracks&bucket=id:7digital-US';
    
    return api
        .call('song', 'search', opts)
        .then(getFirstSong)
        .then(models.Song.create);
};

var Echonest = {
    songDetails: songDetails
};

module.exports = Echonest;