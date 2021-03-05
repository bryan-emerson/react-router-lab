import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import staticData from "./data/parks.json";
// import Parks from './Parks.js';

console.log(staticData)


class App extends Component {
  constructor(){
    super();
    this.state = {
      parks: []
    }
  }

  componentDidMount(){
    this.setState({parks: staticData})
  }

  render() {
    const allParks = [...this.state.parks.map(park=><div key={park.name}>{park.name}</div>)]
    return (
        <div>
          <h1>some national park stuff</h1>
          <nav>
            {allParks}
          </nav>
        </div>
    );
  }
}

export default App;
