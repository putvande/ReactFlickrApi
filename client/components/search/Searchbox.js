import React from 'react';
import { isEmpty } from '../../utils/appFunctions.js';

class Searchbox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            inputError: false
        };
    }

    runSearch(event) {
        event.preventDefault(); 
        const searchQuery = document.querySelector('#searchBox').value;
        searchQuery != ''
        if(!isEmpty(searchQuery)) {
            this.setState({ inputError : false});
            this.props.runQuery(searchQuery);
        } else {
            this.setState({ inputError : true});
        }
    }

    render() {
        const reactLogo = require('../../images/reactLogo.png');
        const flickrLogo = require('../../images/flickrLogo.png');
        return (
            <form className="container" onSubmit={(e) => { this.runSearch(e) }}>
                <div className="searchBox row">
                        <div className="input-group col-xs-3 col-sm-4 col-md-4 col-lg-4 pull-left align-left">
                            <label id="searchLabel">Search the Flickr API for content: </label>
                        </div>
                        <div className="input-group col-xs-8 col-sm-6 col-md-8 col-lg-8 pull-right">
                        <input type="text" id="searchBox" className="form-control" placeholder="Search for..." aria-label="Search for..." />
                        
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="submit">Search Flickr!</button>
                            </span>
                        </div>
                </div>
                <br/><br/>
            </form>
        );
    }

};

export default Searchbox;
