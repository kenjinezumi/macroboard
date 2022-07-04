import 'bootstrap/dist/css/bootstrap.css';
import Link from "../../node_modules/next/link";

const ExternalLink = ({href, children}) =>(
    <a className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
        {children}
    </a>
);

export default function login(props){
  const isLoggedIn = props.isLoggedIn; 

  if(isLoggedIn){

    return (

<div className="container  mw-100 min-vh-100  bg-secondary d-flex align-items-center justify-content-center">
   <div className="row">
     <div className="col-12">
       <div className="card">
         <div className="card-body">
             <h1>
                 Sign-in
             </h1>
           <form>
             <div className="form-outline">
               <input type="email" id="form2Example1" className="form-control" />
               <label className="form-label">Email address</label>
             </div>
             <div className="form-outline mb-4">
               <input type="password" id="form2Example2" className="form-control" />
               <label className="form-label">Password</label>
             </div>
             <div className="row mb-4">
               <div className="col d-flex justify-content-center">
                 <div className="form-check">
                   <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                   <label className="form-check-label"> Remember me </label>
                 </div>
               </div>
               <div className="col">
                 <a href="#!">Forgot password?</a>
               </div>
             </div>
             <button type="button" className="btn btn-primary btn-block mb-4">
                 <Link href="/dashboard">Sign in</Link></button>
             <div className="text-center">
               <p>Not a member? <a href="#!">Register</a>
               </p>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>
 </div>
    )

  }
  else{
    return(
      <div className="container  mw-100 min-vh-100  bg-secondary d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>

    )
  }
}

/*

        */