import Container from "../components/templates/Container";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import GraphMains from "../components/molecules/GraphsMain";
import Navbar from "../components/molecules/Navbar";
import React from "react";
import SearchBar from "../components/molecules/SearchBar";
import GeoMap from "../components/atoms/GeoMap";

class History extends React.Component {
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
              <div className="col-4  bg-light text-secondary  position-relative">
                <Navbar/>
                </div>   
                
                <div className="col-8  bg-light text-secondary  position-relative">
                    <title>
                        This is where the list of all dashboards should be 
                    </title>
                
                </div>   
                
            
              </div>
              <Footer />
            </Container>
          );
      
  }
}
export default History;
