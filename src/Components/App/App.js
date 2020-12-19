//import logo from './logo.svg';
import './App.css';
import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'Shell',
          location: 'Some street',
          gasTypes: [
            {
            name: 'regular',
            price: '3.00'
            },
            {
            name: 'Super',
            price: '5.00'
            },
            {
            name: 'Premium',
            price: '7.00'
            }]
        },
        {
          name: 'Cheap',
          location: 'Somewhere else',
          gasTypes: [
            {
            name: 'regular',
            price: '0.30'
            },
            {
            name: 'Super',
            price: '0.50'
            },
            {
            name: 'Premium',
            price: '0.70'
            }]

    }],

      searchBar: ''
    }

    this.search = this.search.bind(this);
  }

  search(term) {
    /*this.setState({
      searchResults: [term]
    })*/
  }

  render() {
    return (
      <div>
        <h1> App for finding gasoline pricing</h1>
        <SearchBar onSearch={this.search}/>
        <div className='Search-Results'>
          <SearchResults searchResults={this.state.searchResults}/>
        </div>
      </div>
    )
  }

}





export default App;
