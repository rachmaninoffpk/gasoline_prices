import React from 'react';

import StationList from '../StationList/StationList.js';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='SearchResults'>
                <h2> Results </h2>
                <StationList stations={this.props.searchResults} />            
            </div>
        )
    }
}

export default SearchResults;