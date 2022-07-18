import Link from "../../node_modules/next/link";
import 'bootstrap/dist/css/bootstrap.css';
import {Graph} from "../atoms/RenderGraphs";
import dynamic from '../../node_modules/next/dynamic';


const LeafLetChart = dynamic(() => import("../atoms/Map"), { ssr:false })


const ExternalLink = ({href, children}) =>(
    <a className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
        {children}
    </a>
);

export default function graphMains(){
    return (
        <div className="col align-items-center bg-secondary min-vh-100">
        <div className="h-100 w-100 d-flex flex-column">
        <div className="row flex-grow-1 m-4 align-items-center text-center h-25 w-100">
          <div className="col-4  h-100 w-30">
          <Graph Title="First bar chart" type="negativeBarChart" />

          </div>
          <div className="col-4  h-100 w-40">
          <Graph Title="Second bar chart" type="negativeBarChart" />


          </div>
          <div className="col-4  h-100 w-30">
          <Graph Title="First bar chart" type="area" />
          </div>
        </div>
        <div className="row flex-grow-1 m-4 align-items-center text-center h-25 w-100">
          <div className="col-6  h-100 w-50">
          <Graph Title="First time series" type="line" />

          </div>
          <div className="col-6  h-100 w-50">
          <Graph Title="Second time series" type="line"/>

          </div>
        </div>
        <div className="row flex-grow-1 m-4 align-items-center  text-center h-50 w-100 p-2">
          <div className="col-12 p-2 h-100 w-100 p-2">
          <Graph Title="Third time series" type="line" />


          </div>
         
        </div>

        <div className="row flex-grow-1 m-4 align-items-center  text-center h-50 w-100 p-2">
          <div className="col-12 p-2 h-100 w-100 p-2">
          <LeafLetChart/>


          </div>
         
        </div>
        </div>
      </div>
    )
}