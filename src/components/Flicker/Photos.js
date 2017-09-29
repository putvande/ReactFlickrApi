import React from 'react';
import Photo from './Photo';
import Masonry from 'react-masonry-component';

class Photos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBeingRender: true,
        };
        this.handleLayoutComplete = this.handleLayoutComplete.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isBeingRender: true})
    }
    // Masonry fires this function after the layout is performed
    handleLayoutComplete() {
        // initially hidden prevent flash of content before masonry has fixed it &hide loading spinner
        // document.querySelector('.photoContainer').style.visibility='visible';
        // document.querySelector('.fa-circle-o-notch').style.display='none';
        if(this.state.isBeingRender) {
            this.setState({ isBeingRender: false });
            document.querySelector('.photoContainer').style.visibility='visible';
            document.querySelector('.fa-circle-o-notch').style.display='none';
        }
    }

    render() {
		// results will either be the first time loaded results or the search query, otherwise empty
        const results = this.props.searchResults || this.props.items || [];
        const { isBeingRender = false } = this.state;
        return <Masonry onLayoutComplete={ this.handleLayoutComplete } className={'masonryLayout' + (isBeingRender ? 'hide' : '')} ref={function(c) {this.masonry = this.masonry || c.masonry;}.bind(this)}>
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