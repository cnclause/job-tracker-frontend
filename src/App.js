import React, { Component } from 'react';
import './App.css';

import Home from './containers/Home'

class App extends Component {

  state ={
    jobs: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(jobs => this.setState({ jobs }))
  }


  render(){
    return (
      <div className="App">
       <Home jobs={this.state.jobs}/>
      </div>
    );
  }

  }

export default App;
