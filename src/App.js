import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {MustPlay} from "./Components/MustPlay";
import {Search} from "./Components/Search";
import {Nav} from './Components/Nav'
import {GameDetail} from "../src/Components/GameDetail";
import {SignIn} from '../src/Components/SignIn';
import {Home} from '../src/Components/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/mustplay' component={MustPlay} />
          <Route exact path='/search' component={Search} />
          <Route path='/game/:name' component={GameDetail} />
          <Route path='/signin' component={SignIn} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;