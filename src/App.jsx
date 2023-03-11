import './App.css';
import {Route, Switch} from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path='/' component={MainContent}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
