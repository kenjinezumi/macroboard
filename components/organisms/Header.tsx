import 'bootstrap/dist/css/bootstrap.css';

const ExternalLink = ({href, children}) =>(
    <a className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
        {children}
    </a>
);

export default function header(){
    return (

      <header>
      <div className="col-4 text-start ms-6">Aether</div>
      <div className="col-8 text-start"></div>
    </header>


    )
}