import React, {Fragment} from 'react';
import { BrowserRouter as Router, Redirect, Route,Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css';
import Account from './pages/Account/Account';
import Footer from './components/Footer/Footer';
import User from './pages/User/User';

function App() {
  return (
   <Fragment>
     <Router>
     <Header />
     <Switch> 
     <Route path = "/" exact = {true} component = {Account} />
     <Route path = "/user" exact = {true} component = {User} />

     </Switch>
      <Footer />
     </Router>

   </Fragment>
  );
}

export default App;
