import {Route, Switch} from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/header/header";
import './App.css';
// import {themeContext} from  './Context'
// import { useContext } from "react";

function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
    return (
      <div className="App"
      // style = {{
      //   background : darkMode? 'black': '',
      //   color : darkMode? 'white': ''
      // }}
      >
          <Header/>
          <Switch>
            <Route exact path='/' component={MainContent}/>
            <Route exact path='/about' component={AboutPage}/>
          </Switch>
        <Footer />
      </div>
    );
}

export default App;
