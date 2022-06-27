import 'bootstrap/dist/css/bootstrap.css';

const ExternalLink = ({href, children}) =>(
    <a className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
        {children}
    </a>
);

export default function geoMap(props){
    return (
        <div className="container-fluid h-100 d-flex flex-column p-2">
        <div className="text-center h-100">
          <div className="card h-100 align-items-center">
            <div className="card-body align-items-center">
              <h5 className="card-title align-items-center">{props.Title}</h5>
            </div>
          </div>
        </div>
      </div>
      
    )
}