import React from 'react';
import App from './App.jsx';
import SongStore from '../stores/songStore';
import ActionCreator from '../actions/songActionCreators';

export default React.createClass({
    _onChange(e) {
        this.setState({ song: SongStore.getSong() });
    },
    getInitialState() {
        return { song: SongStore.getSong() };
    },
    componentDidMount() {
        SongStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        SongStore.removeChangeListener(this._onChange);
    },
    handleSongSearch(e) {
        ActionCreator.songSearch(e);
    },
    render() {
        let song = this.state.song || { empty: true };
        
        return (
            <App song={song} onSongSearch={this.handleSongSearch} />
        );
    }
});