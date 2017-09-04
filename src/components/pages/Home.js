import React from 'react';
import Searchbox from '../search/Searchbox.js';
import FlickrGallery from '../Flicker/FlickrGallery';

class Home extends React.Component {

    constructor(props) {
        super(props);
        // Set up the base search string for API and the state for the next search built
        this.state = {
            queryString : 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&lang=en-us&jsoncallback=?',
            currentQuery : ''
        };
        // bind child function from search component to parent
        this.runQuery = this.runQuery.bind(this);
    }

    // query is passed up from Searchbox component
    runQuery (searchQuery) {
        const query = this.state.queryString + '&tags=' + searchQuery;
        this.setState({ currentQuery : query });
    }

    render() {
        // only the user searches are passed here as props, search logic takes place in main FlickrGallery component
        return (
            <div className="contentContainer">
                <Searchbox runQuery={ this.runQuery } />
                <span className="fa fa-circle-o-notch fa-spin"></span>
                <FlickrGallery searchQuery={ this.state.currentQuery } />
            </div>
        );
    }

};

export default Home;
