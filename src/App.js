import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SwiperBlock from "./components/swiper/Swiper";
import React from 'react'


function App() {
    return (
        <div className="App">
           <Switch>
            <Route exact path='/header' component={Header}/>
            <Route exact path='/footer' component={Footer}/>
            </Switch>
          <SwiperBlock />
        </div>
    );
}

export default App;
