import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <Switch>
      <Route exact path='/sign-in' component={SignInPage} />
      <Route exact path='/sign-up' component={SignUpPage} />
    </Switch>
  );
}

export default App;
