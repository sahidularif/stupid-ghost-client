import Navs from './components/Home/Navs/Navs'
import Home from './components/Home/Home';
import admin from './components/Admin/Dashboard/Dashboard';
import login from './components/Login/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/admin' component={admin}></Route>
          <Route exact path='/login' component={login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
