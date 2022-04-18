import { Component } from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    
    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch("https://jsonplaceholder.typicode.com/users") //Native fetch
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }


  onSearchChange = (event)=>{
    const searchText = event.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return { searchField: searchText }
    })
  }

  render() {
    // console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
     <h1>Monster Rolodex</h1>
      <SearchBox onChangeHandler={this.onSearchChange} placeholder="Search Monsters" />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
