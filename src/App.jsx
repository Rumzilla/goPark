import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";


  function App() {
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={MainContent} />
            <Route exact path='/sign-in' component={SignInPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }

  export default App;
