import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'
export class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    
    this.handleChange=this.handleChange.bind(this);
    
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange(e){
    
    this.setState({searchField:e.target.value})
  }

  render() {
    
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));
    const eventHandler = (input) => {
      this.setState({ searchField: input.target.value })
    } 
    
    return (
      <div className="App">
        <h1>Mahir's Monsters</h1>
        <SearchBox placeholder="search monsters" handleChange={eventHandler} />
        <CardList className="card-list" monsters={filteredMonster} />
      </div>
    )
  }
}



export default App;
