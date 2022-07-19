import Container from "../components/templates/Container";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import GraphMains from "../components/molecules/GraphsMain";
import Navbar from "../components/molecules/Navbar";
import React from "react";
import SearchBar from "../components/molecules/SearchBar";
import GeoMap from "../components/atoms/GeoMap";

class ReportSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "entry",
    };
  }

  render(): React.ReactNode {
        return (
            <Container>
              <Header />
              <div className="row flex">
                
                <div className="col-md-6  bg-light text-secondary  position-relative">
                <SearchBar/>
                </div>   
                <div className="col-md-6 bg-light text-secondary  position-relative">
                <GeoMap/>
                </div>   

                                  
            
              </div>
              <Footer />
            </Container>
          );
      
  }
}
export default ReportSearch;
