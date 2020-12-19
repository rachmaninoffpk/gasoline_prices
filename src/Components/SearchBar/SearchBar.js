import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    handleChange(e) {
        this.setState({term: e.target.value})
    }

    search() {
        this.props.onSearch(this.state.term);
    }



    render() {
        return (
            <div className='SearchBar'>
                <input onChange={this.handleChange} placeholder="Please input the zipcode"/>
                <button className='SearchButton'>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;