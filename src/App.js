import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      originalMonsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users, originalMonsters: users }));
  }

  handleSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredMonsters = this.state.originalMonsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    this.setState({ searchField: searchString, monsters: filteredMonsters });
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className='App'>
        <SearchBox
          className='search-box'
          placeholder='search monsters'
          onChangeHandler={this.handleSearchChange}
        />
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;





