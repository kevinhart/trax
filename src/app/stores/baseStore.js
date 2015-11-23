import Constants from '../Constants';
import {EventEmitter} from 'events';

var BaseStore = Object.create(EventEmitter.prototype);

BaseStore.addChangeListener = function addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
};

BaseStore.removeChangeListener = function removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
};

BaseStore.emitChange = function emitChange(callback) {
    this.emit(Constants.CHANGE_EVENT);
};

export default BaseStore;