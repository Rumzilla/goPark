import {Route, Switch} from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/header/header";
import './App.css';
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
    return (
      <>
        <Header/>
        <Switch>
          <Route exact path='/' component={MainContent}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/news' component={NewsPage}/>
        </Switch>
        <Footer />
      </>
    );
}

export default App;
