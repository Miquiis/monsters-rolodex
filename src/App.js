import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({monsters : json}))
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Holodex </h1>
        <SearchBox
          placeholder='Insert Name..'
          handleChange={e => this.setState({ searchfield: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
