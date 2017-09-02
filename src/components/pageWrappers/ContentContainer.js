import React from 'react';
import Searchbox from '../search/Searchbox.js';
import FlickrGallery from '../Flicker/FlickrGallery';

class ContentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            queryString : 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&lang=en-us&jsoncallback=?',
            currentQuery : '',
            searchResults : []
        };
        this.runQuery = this.runQuery.bind(this);
    }

    runQuery (searchQuery) {
        const query = this.state.queryString + '&tags=' + searchQuery;
        this.setState({ currentQuery : query });
    }

    render() {
        const reactLogo = require('../../images/reactLogo.png');
        const flickrLogo = require('../../images/flickrLogo.png');
        const searchResults = this.state.items;
        return (
			<div className="contentContainer">
				<Searchbox runQuery={ this.runQuery } />
				<span className="fa fa-circle-o-notch fa-spin"></span>
				<FlickrGallery searchQuery={ this.state.currentQuery } searchResults={ searchResults } />
            </div>
        );
    }

};

export default ContentContainer;
