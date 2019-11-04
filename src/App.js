import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import axios from 'axios';
import './global.js';

class App extends Component {

  state = {
    personajes: []
  }

  componentDidMount() {
    axios.get(global.api_url+'users')
      .then(res => {
        const personajes = res.data;
        this.setState({ personajes });
      })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
          <div className="container-fluid">
          <div className="row ">

               { this.state.personajes.map(person =>
                  <Card data={person}></Card>
               )}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
