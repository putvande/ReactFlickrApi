import React from 'react';
import renderHTML from 'react-render-html';
import { extractFlickrUserName } from '../../utils/appFunctions';

class Photo extends React.Component {
    render() {
        const loadingImg = require('../../images/imageLoading.gif');
        let { index, title, link, author, authorId, media, tags, description } = this.props;
        title = (title.replace(' ', '') === '') ? 'No Title Provided' : title.toUpperCase();
        tags = (tags.replace(' ', '') === '') ? 'No Tags Provided' : tags;
        // remove inline HTML image. we already have it
        description = description.replace(/<img .*?>/g, '');
        const authorPage = 'https://www.flickr.com/photos/' + authorId;
        const authorName = extractFlickrUserName(author);

        return (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-item">
                    <div className="card text-white mb-3">
                        <img className="card-img-top" src={ media } alt="Card image cap" width="100%" />
                        <div className="card-body">
                            <p><a href={ link } target="_blank">{ title }</a> by <a href={ authorPage } target="_blank">{ authorName }</a></p>
                            <strong>Description: </strong>{ renderHTML(description) }
                            <p className="card-text"><strong>Tags: </strong>{ tags }</p>
                        </div>
                    </div>
                </div>
        );
    }

};

export default Photo;
