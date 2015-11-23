import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Promise from 'bluebird';
import $ from 'jquery';

export default {
    songSearch(e) {
        Dispatcher.handleViewAction({
            type: Constants.ActionTypes.SONG_DATA_RECEIVING
        });
        Promise.resolve($.get('api/song/details?title=' + e.title + '&artist=' + e.artist))
            .then(function (data) {
                if (!data.title) data = { notFound: true };
                Dispatcher.handleViewAction({
                    type: Constants.ActionTypes.SONG_DATA_RECEIVED,
                    song: data
                });
            });
    }
};