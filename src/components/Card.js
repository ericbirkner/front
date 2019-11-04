import React, { Component } from 'react';
import { Link} from 'react-router-dom';

function Card(props) {

  console.log(props);

  return(
      <div className="carta col-lg-4 no-gutters ">
          <Link to={`/personaje/${props.data.results_id}`}><img className="card-img-top" src={props.data.results_image} alt="Card image cap"/></Link>
          <div className="carta col-lg-12">
          <div className="card-block">
          <h4 className="card-title">{props.data.results_name}</h4>
          </div>
        </div>

      </div>)
}

export default Card;
