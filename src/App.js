//State a description of your app, will change from de value of the input
//Props (child) things that come from the state (parent)

//import React, {useState} from 'react';
import React, {Component} from 'react';
import Searchbox from './SearchBox';
import CardList from './CardList';
import { Robots } from './Robots';

class App extends Component {
  //const [robots, setRobots] = useState();
  //const [search, setSearch] = useState('');
  constructor(){
    super()
    this.state ={
      robots: Robots,
      searchfield:''
    }
  }
  onSearchChange = (e) =>{
   this.setState = ({ searchfield : e.target.value})
  }
  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
  return(
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div> 
    )
  }
}

export default App