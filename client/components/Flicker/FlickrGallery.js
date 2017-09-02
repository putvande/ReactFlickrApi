import React from 'react';
import Photo from './Photo';
import $ from 'jquery';
import Masonry from 'react-masonry-component';

class FlickrGallery extends React.Component {

constructor(props) {
        super(props);
            this.state = {
            items: [],
            masonry: false
        };
        this.masonryState = false;
        this.handleLayoutComplete = this.handleLayoutComplete.bind(this);
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

    handleLayoutComplete() {
        this.masonryState = true;
        // prevent flash of content before masonry has fixed it 
        document.querySelector('.photoContainer').style.visibility='visible';
        document.querySelector('.fa-circle-o-notch').style.display='none';
    }

    componentWillUpdate() {

    }

    render() {
        const results = this.props.searchResults || this.state.items || [];
        const masonry = this.masonryState;

        return results.length > 0
        ?   <div className="container photoContainer">
                <Masonry onLayoutComplete={ this.handleLayoutComplete } className="masonryLayout" ref={function(c) {this.masonry = this.masonry || c.masonry;}.bind(this)}>
                    {results.map((t, i) =>
                        <Photo 
                            ms={ masonry }
                            key={i}
                            media={t.media.m}
                            title={t.title}
                            link={t.link}
                            author={t.author}
                            authorId={t.author_id}
                            description={t.description}
                            tags={t.tags}
                        />
                    )}
                </Masonry>
            </div>
        : <div className="container noResults"><br/><h4>No Results</h4></div>
    }

};

export default FlickrGallery;
