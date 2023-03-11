import {Route, Switch} from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import './App.css';

function App() {
    return (
      <>
          <Switch>
            <Route exact path='/' component={MainContent}/>
            <Route exact path='/about' component={AboutPage}/>
          </Switch>
        <Footer />
      </>
    );
}

export default App;
