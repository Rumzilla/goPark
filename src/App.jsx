import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainContent from "./components/MainContent/MainContent";
import SwiperBlock from "./components/swiper/Swiper";
function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' component={MainContent}/>
            </Switch>
            <SwiperBlock />
        </div>
    );
}

export default App;
