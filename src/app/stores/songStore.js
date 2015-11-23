import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './baseStore';

let song = null;

let SongStore = Object.create(BaseStore);

SongStore.getSong = function getSong() { return song; }

SongStore.dispatcherIndex = Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
        case Constants.ActionTypes.SONG_DATA_RECEIVED:
            song = action.song;
            // NOTE: if this action needs to wait on another store:
            // Dispatcher.waitFor([OtherStore.dispatchToken]);
            // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
            SongStore.emitChange();
            break;

        case Constants.ActionTypes.SONG_DATA_RECEIVING:
            song = { loading: true };
            SongStore.emitChange();
            break;

        // no default
    }
});

export default SongStore;