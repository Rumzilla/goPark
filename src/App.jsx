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
import ContactPage from './pages/ContactPage/ContactPage';
import ShopPage from './pages/ShopPage/ShopPage';


  function App() {
    return (
      <>
          <Header/>
            <Switch>
            <Route exact path='/' component={MainContent} />
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/news' component={NewsPage}/>
            <Route exact path='/sign-in' component={SignInPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/shop' component={ShopPage} />
          </Switch>
        <Footer />
      </>
    );
  }

  export default App;
