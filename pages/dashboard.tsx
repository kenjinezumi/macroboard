import Container from "../components/templates/Container";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import GraphMains from "../components/molecules/GraphsMain";
import Navbar from "../components/molecules/Navbar";
export default function About(){
    return(
        <Container>
            <Header/>
             <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark  position-relative">
                <Navbar/>
                </div>
            <GraphMains/>
         </div>
        <Footer/>
    </Container>
    )
}