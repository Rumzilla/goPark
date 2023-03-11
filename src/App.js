import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "../src/components/header/header"
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <Switch>
                <Header />
                <Route exact path='/footer' component={Footer}/>
            </Switch>
        </div>
    );
}

export default App;
