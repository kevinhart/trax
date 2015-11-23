import keyMirror from 'keymirror';

export default {
    CHANGE_EVENT: 'change',
    
    ActionTypes: keyMirror({
        DO_SONG_SEARCH: null,
        SONG_DATA_RECEIVED: null
    }),
    
    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};