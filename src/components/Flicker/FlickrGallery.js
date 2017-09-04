import React from 'react';
import Photos from './Photos';
import $ from 'jquery';
import Masonry from 'react-masonry-component';

class FlickrGallery extends React.Component {

    constructor(props) {
        super(props);
            // items is the first time search performed on load, searchQuery
            this.state = {
            items: []
        };
    }

    // search query from the SearchBox sibling component via parent
    componentWillReceiveProps(nextProps) {
        this.setState({ masonry: true });
        this.runSearchQuery(nextProps.searchQuery);
    }

    runSearchQuery(query) {
        // Use JSONP here to get around CORS not enabled on Flickr, setState, replacing last loading items with new results
        $.getJSON(query)
        .done(function (data) {
            const items = data.items;
            this.setState({ ...this.state, items });
        }.bind(this));
    }

    componentDidMount() {
        // let apiKey = '10742bf3f145558997b8001765ea41b5';
        // Default query performed on Component Mount - the first results user sees 
        var flickerAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&lang=en-us&jsoncallback=?';
        $.getJSON(flickerAPI)
        .done(function (data) {
            const items = data.items;
            const masonry = false;
            this.setState({ ...this.state, items, masonry });
        }.bind(this));
    }

    render() {
        // results will either be the first time loaded results or the search query, otherwise empty
        const results = this.props.searchResults || this.state.items || [];

        return results.length > 0
        ?   <div className="container photoContainer">
                <Photos items={this.state.items} searchResults={this.props.searchResults} />
            </div>
        :   <div className="container noResults">
                <div className="alert alert-info">
                    <h4><strong>No Results Returned...</strong> Please try another search.</h4>
                </div>
            </div>
    }

};

export default FlickrGallery;
