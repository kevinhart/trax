import React, {PropTypes} from 'react';
import Song from './Song.jsx';

export default React.createClass({
    propTypes: {
        onSongSearch: PropTypes.func.isRequired,
        song: PropTypes.object.isRequired
    },
    getDefaultProps() {
        return {
            song: { empty: true }
        };
    },
    getInitialState() {
        return { title: '', artist: '' };
    },
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    },
    handleArtistChange(e) {
        this.setState({ artist: e.target.value });
    },
    doSearch(e) {
        e.preventDefault();
        this.props.onSongSearch(this.state);
    },
    render: function () {
        return (
            <div>                
                <div className="row">
                    <form className="col s12" onSubmit={this.doSearch}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="title" value={this.state.title} onChange={this.handleTitleChange} />
                                <label htmlFor="title" className="pink-text text-lighten-2">Title</label>
                            </div>
                            <div className="input-field col s12">
                                <input type="text" id="artist" value={this.state.artist} onChange={this.handleArtistChange} />
                                <label htmlFor="title" className="pink-text text-lighten-2">Artist</label>
                            </div>
                            <div className="col s12">
                                <input type="submit" style={{ display: 'none' }} />
                                <a onClick={this.doSearch} className="waves-effect pink lighten-2 waves-light btn right"><i className="material-icons left">search</i>Search</a>
                            </div>
                        </div>            
                    </form>
                </div>
                <div className="row">
                    <div className="col s0 m3"></div>
                    <div className="col s12 m6">
                        <Song data={this.props.song} />
                    </div>
                </div>
            </div>
        );
    }
});