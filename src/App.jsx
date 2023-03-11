import './App.css';
import {Route, Switch} from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import SwiperBlock from "./components/swiper/Swiper";
import Footer from "./components/footer/footer";

function App() {
    return (
      <>
        <div className="container">
          <Switch>
            <Route exact path='/' component={MainContent}/>
          </Switch>
        </div>
      <Footer />
      </>
    );
}

export default App;
