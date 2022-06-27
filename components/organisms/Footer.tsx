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

export default function footer(){
    return (
      <footer>
      <section >
      <div className="row">
      <div className="col-6 text-end">
      <Link href="/about">

           <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-white dark:text-white">
             About</a>

      </Link>
      </div>
      <div className="col-6 text-start">
      <Link href="/about">

      <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-white dark:text-white">
         Contact</a>
        </Link>
      </div>
      </div>
      </section>
      <section>
        <div className="row">
          <div className="col-12 text-center">
          © Type 03 Ltd. All rights reserved. </div> 
          </div>
      </section>
    </footer>
    )
}