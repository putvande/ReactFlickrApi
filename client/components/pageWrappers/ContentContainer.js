import React from 'react';
import Searchbox from '../search/Searchbox.js';
import FlickrGallery from '../Flicker/FlickrGallery';
import $ from 'jquery';

class ContentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            queryString: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&lang=en-us&jsoncallback=?',
            searchResults: []
        };
        this.runQuery = this.runQuery.bind(this);
    }

    runQuery (searchQuery) {
        const query = this.state.queryString + '&tags=' + searchQuery;
        const items = $.getJSON(query)
        .done(function (data) {
            const items = data.items;
            this.setState({ ...this.state, items });
            // reference to masonry to add complete handler
           // this.masonry.on('layoutComplete', this.handleLayoutComplete);
        }.bind(this));
    }

    render() {
        const reactLogo = require('../../images/reactLogo.png');
        const flickrLogo = require('../../images/flickrLogo.png');
        const searchResults = this.state.items;
        return (
			<div className="contentContainer">
				<Searchbox runQuery={ this.runQuery } />
				<span className="fa fa-circle-o-notch fa-spin"></span>
				<FlickrGallery searchResults={ searchResults } />
            </div>
        );
    }

};

export default ContentContainer;
