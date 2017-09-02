import React from 'react';
import Photos from './Photos';
import $ from 'jquery';
import Masonry from 'react-masonry-component';

class FlickrGallery extends React.Component {

constructor(props) {
        super(props);
            this.state = {
            items: [],
            masonry: false,
            searchQuery : ''
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.runSearchQuery(nextProps.searchQuery);
    }

    runSearchQuery(query) {
        console.log(query);
        $.getJSON(query)
        .done(function (data) {
            const items = data.items;
            this.setState({ ...this.state, items });
            // reference to masonry to add complete handler
           // this.masonry.on('layoutComplete', this.handleLayoutComplete);
        }.bind(this));
    }

    componentDidMount() {
        let apiKey = '10742bf3f145558997b8001765ea41b5';
    
        var flickerAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&lang=en-us&jsoncallback=?';
        $.getJSON(flickerAPI)
        .done(function (data) {
            const items = data.items;
            const masonry = false;
            this.setState({ ...this.state, items, masonry });
            // reference to masonry to add complete handler
           // this.masonry.on('layoutComplete', this.handleLayoutComplete);
        }.bind(this));
    }

    render() {
        const results = this.props.searchResults || this.state.items || [];
        const masonry = this.masonryState;

        return results.length > 0
        ?   <div className="container photoContainer">
                <Photos items={this.state.items} searchResults={this.props.searchResults} />
            </div>
        : <div className="container noResults"><br/><h4>No Results</h4></div>
    }

};

export default FlickrGallery;
