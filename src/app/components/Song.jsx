import React, {PropTypes} from 'react';
import CircularPreLoader from './CircularPreLoader.jsx';

export default React.createClass({
    propTypes: {
        data: PropTypes.object.isRequired
    },
    getDefaultProps() {
        return {
            data: { empty: true }
        };
    },
    render() {        
        if (!!this.props.data.empty) {
            return null;
        }
        
        if (!!this.props.data.notFound) {
            return (
                <div className="row">
                    <div className="col s12">
                        <div className="card pink lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">No Match</span>
                                <p>We couldn't find a song that matches your search. Did you type the Title and Artist correctly?</p>
                            </div>
                        </div>
                    </div>
                </div> 
            );
        }
        
        if (!!this.props.data.loading) {
            return <div className="center"><CircularPreLoader /></div>;
        }
              
        let img = !!this.props.data.image ?
            <img className="z-depth-2" width="100%;" src={this.props.data.image} />
            : <i className="material-icons grey-text z-depth-1 center grey text-lighten-2" style={{ fontSize: '8em' }}>audiotrack</i>;
        
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card grey lighten-2">
                        <div className="card-content">
                            <span className="card-title">Song Found!</span>
                            <div className="row">
                                <div className="col s5">
                                    <table><tbody><tr><td className="center">{img}</td></tr></tbody></table>
                                </div>
                                <div className="col s7">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th style={{ width: '35%' }}>Title</th>
                                                <td>{this.props.data.title}</td>
                                            </tr>
                                            <tr>
                                                <th>Artist</th>
                                                <td>{this.props.data.artist}</td>
                                            </tr>
                                            <tr>
                                                <th>Album</th>
                                                <td>{this.props.data.album}</td>
                                            </tr>
                                            <tr>
                                                <th>BPM</th>
                                                <td>{this.props.data.bpm}</td>
                                            </tr>
                                            <tr>
                                                <th>Key</th>
                                                <td>{this.props.data.key}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        );
    }
});