import Link from "../../node_modules/next/link";
import "bootstrap/dist/css/bootstrap.css";
import { Graph } from "../atoms/RenderGraphs";
import dynamic from "../../node_modules/next/dynamic";

const LeafLetChart = dynamic(() => import("../atoms/Map"), { ssr: false });

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function entryDashboard() {
  return (
    <div className="col bg-secondary overflow-auto position-relative">
      <div className="h-100 w-100 d-flex flex-column">
        <div className="row flex-grow-1 m-4 align-items-center justify-content-center h-25 w-100">
          <div className="col-md-12 d-flex h-50 w-50 justify-content-center">
            <div className="cta d-flex h-50 w-50 align-items-center justify-content-center  align-middle">
            <Link href="/search">Search</Link>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}
