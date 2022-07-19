import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react";
import {GenerateChart} from './Charts';

const ExternalLink = ({href, children}) =>(
  <a className="text-gray-500 hover:text-gray-600 transition"
  target="_blank"
  rel="noopener noreferrer"
  href={href}>
      {children}
  </a>
);



export function Graph(props){

    return (

        <div className="container-fluid h-100 d-flex flex-column ">
        <div className="text-center h-100">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{props.Title}</h5>
              {GenerateChart(props.type)}
            </div>
          </div>
        </div>
      </div>
      
    )
}

