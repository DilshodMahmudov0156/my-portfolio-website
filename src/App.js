import './App.css';
import Nav from "./parts/header/nav";
import Header from "./parts/header/header";
import Section from "./parts/section/section";

function App() {

    return(
        <div className="app">
            <Nav/>
            <Header/>
            <Section/>
        </div>
    );
}

export default App;