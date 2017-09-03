import React from 'react';
import { isEmpty } from '../../utils/appFunctions';

class Searchbox extends React.Component {
    constructor(props) {
    super(props);
    // if a user attempts a null search, they are notified
    this.state = {
            inputError: false
        };
    }

    // passed up to parent 
    runSearch(event) {
        event.preventDefault(); 
        const searchQuery = document.querySelector('#searchBox').value;
        searchQuery != ''
        if(!isEmpty(searchQuery)) {
            // run when a valid search is performed
            this.setState({ inputError : false});
            this.props.runQuery(searchQuery);
        } else {
            this.setState({ inputError : true});
        }
    }

    render() {
        // doesn't allow user to run empty search, gives a warning
        const inputError = this.state.inputError;
        return (
            <form className="container" onSubmit={(e) => { this.runSearch(e) }}>
                <div className="searchContainer row">
                        <div className="input-group searchLabelText col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left align-left">
                            <h4>Search the Flickr API for content: </h4>
                        </div>
                        <div className="input-group col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
                        <input type="text" id="searchBox" className="form-control" placeholder="Search for..." aria-label="Search for..." />     
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="submit">Search Flickr!</button>
                            </span>
                        </div>
                        <div className="clearfix"></div>
                        <br/>
                        <div className={ inputError ? 'alert alert-warning' : 'alert alert-warning hide'}>
                            <strong>The search field is empty!</strong> Please make a valid search.
                        </div>
                </div>
                <br/><br/>
            </form>
        );
    }

};

export default Searchbox;
