import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/header/header";
import './App.css';


  function App() {
    return (
      <>
          <Header/>
            <Switch>
            <Route exact path='/' component={MainContent} />
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/sign-in' component={SignInPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
          </Switch>
        <Footer />
      </>
    );
  }

  export default App;
