var util = require('./util');

var getKey = function getKey(keyId) {
    switch (keyId) {
        case 0: return 'c';
        case 1: return 'd-flat';
        case 2: return 'd';
        case 3: return 'e-flat';
        case 4: return 'e';
        case 5: return 'f';
        case 6: return 'f-sharp';
        case 7: return 'g';
        case 8: return 'a-flat';
        case 9: return 'a';
        case 10: return 'b-flat';
        case 11: return 'b';
        default: '';
    }
};

var Song = {
    _init: function (s) {
        s = s || {};
        
        this.title = s.title;
        this.artist = s.artist_name;
        
        if (!!s.audio_summary) {
            this.bpm = s.audio_summary.tempo;
            this.key = getKey(s.audio_summary.key);
        }
        
        if (!!s.tracks && s.tracks.length > 0) {
            var track = s.tracks[0];
            if (!!track.release_image) {
                this.image = track.release_image;
            }
        }
        
        return this;
    }
};

asCreateable = (function () {
    var create = function (other) {
        return typeof this._create === 'function' ? this._create(other) : util.merge(this, other);
    };
    
    return function (obj) {
        obj.create = function (other) {
            var newObj = Object.create(obj);
            if (typeof newObj._init === 'function') {
                newObj._init(other);
            } else {
                newObj = util.merge(newObj, other);
            }
            
            return newObj;
        };
        
        return obj;
    };
}());

module.exports = {
    Song: asCreateable(Song)
};