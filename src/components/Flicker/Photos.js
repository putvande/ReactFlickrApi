import React from 'react';
import Photo from './Photo';
import Masonry from 'react-masonry-component';

class Photos extends React.Component {

constructor(props) {
        super(props);
            this.state = {
                masonry : false
        };
        this.handleLayoutComplete = this.handleLayoutComplete.bind(this);
    }

    // Masonry fires this function after the layout is performed
    handleLayoutComplete() {
        // initially hidden prevent flash of content before masonry has fixed it 
        document.querySelector('.photoContainer').style.visibility='visible';
        // Hide loading spinner
        document.querySelector('.fa-circle-o-notch').style.display='none';
    }

    render() {
        // results will either be the first time loaded results or the search query, otherwise empty
        const results = this.props.searchResults || this.props.items || [];
        return <Masonry onLayoutComplete={ this.handleLayoutComplete } className="masonryLayout" ref={function(c) {this.masonry = this.masonry || c.masonry;}.bind(this)}>
                    {results.map((t, i) =>
                        <Photo 
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
    }

};

export default Photos;
