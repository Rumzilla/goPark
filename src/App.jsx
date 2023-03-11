import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainContent from "./components/MainContent/MainContent";

function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' component={MainContent}/>
                <Route exact path='/header' component={Header}/>
                <Route exact path='/footer' component={Footer}/>
            </Switch>
        </div>
    );
}

export default App;
