import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/admin';
import Home from './pages/index';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';

function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
     <Route path="/signup">
         <SignUp/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route exact path="/admin">
         <Admin/>
       </Route>
       <Route path="/">
         <Home/>
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
