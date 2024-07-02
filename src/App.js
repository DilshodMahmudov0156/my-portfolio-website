import './App.css';
import Nav from "./parts/header/nav";
import Header from "./parts/header/header";
import Section from "./parts/section/section";
import Footer from "./parts/footer/footer";

function App() {

    return (
        <div className="app">
            <Nav/>
            <Header/>
            <Section/>
            <Footer/>
        </div>
    );
}

export default App;