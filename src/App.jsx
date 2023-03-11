import './App.css';
import {Route, Switch} from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import SwiperBlock from "./components/swiper/Swiper";
import Footer from "./components/footer/footer";
import Header from './components/header/header';

function App() {
    return (
      <>
      <Header/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={MainContent}/>
          </Switch>
          <SwiperBlock />
        </div>
      <Footer />
      </>
    );
}

export default App;
