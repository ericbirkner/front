import React, { Component } from 'react';
import Header from './components/Header';

import axios from 'axios';
import './global.js';

class Personaje extends Component {

  state = {
    personaje: [],
    Id:this.props.match.params.id
  }

  componentDidMount() {
    axios.get(global.api_url+'users/'+this.state.Id)
      .then(res => {
        const personaje = res.data;
        console.log(personaje);
        this.setState({ personaje });
      })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
          <div className="container-fluid">

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-12 col-sm-6"><img src={this.state.personaje.results_image} className="img-fluid" alt=""/></div>
                <div className="col-xl-4 col-lg-4 col-sm-12 col-sm-6">
                <h1>{this.state.personaje.results_name}</h1>
                <ul>
                    <li>Status: {this.state.personaje.results_status}</li>
                    <li>Species: {this.state.personaje.results_species}</li>
                    <li>Gender: {this.state.personaje.results_gender}</li>
                    <li><p className="card-text"><small className="text-muted">Origen: {this.state.personaje.results_origin_name}</small></p></li>
                </ul>

                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Personaje;
/*
<div className="col-xl-4 col-lg-4 col-sm-12 col-sm-6"><img src={personaje.image} className="img-fluid" alt=""/></div>
<div className="col-xl-4 col-lg-4 col-sm-12 col-sm-6">
<h1>{personaje.name}</h1>
<ul>
    <li>Status: {personaje.status}</li>
    <li>Species: {personaje.species}</li>
    <li>Gender: {personaje.gender}</li>
</ul>

</div>
*/
