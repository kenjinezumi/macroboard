import Container from "../components/templates/Container";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import Login from "../components/organisms/Login";
export default function Home(){
    return(
    <Container>
        <Header/>
        <Login isLoggedIn="true"/>
        <Footer/>
    </Container>
    )
    

}
