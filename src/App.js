import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import { NavigationBar } from './Components/NavigationBar';
import { Mainpage } from './mianpage';
import { Review } from './review';
import { billboard } from './billboard';
import { Login } from './login';
import { Explore } from './explore';

function App() {
  return (
<React.Fragment>
  <Router>
  <NavigationBar />
  <Switch>
  <Route exact path="/" component={Mainpage} />
  <Route path="/billboard" component={billboard} />
  <Route path="/review" component={Review} />
  <Route path="/explore" component={Explore} />
  <Route path="/login" component={Login} />
</Switch>

  </Router>
</React.Fragment>
  );
}

export default App;
