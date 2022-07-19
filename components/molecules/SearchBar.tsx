import Link from "../../node_modules/next/link";
import 'bootstrap/dist/css/bootstrap.css';

const ExternalLink = ({href, children}) =>(
    <a className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
        {children}
    </a>
);

export default function SearchBar(){
    return (
        <div className="container-fluid">
       
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-secondary min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-secondary text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    
                    
                   
                </div>
            
            </div>
            
      
    )
}