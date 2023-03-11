import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/AuthPage/AuthPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/header/header";
import './App.css';
import NewsPage from "./pages/NewsPage/NewsPage";


  function App() {
    return (
      <div className="App"
      // style = {{
      //   background : darkMode? 'black': '',
      //   color : darkMode? 'white': ''
      // }}
      >
          <Header/>
            <Switch>
            <Route exact path='/' component={MainContent} />
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/news' component={NewsPage}/>
            <Route exact path='/sign-in' component={SignInPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
          </Switch>
        <Footer />
      </div>
    );
  }

  export default App;
