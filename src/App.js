import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'
import AccountsPage from './components/AccountsPage'
import AccountForm from './components/AccountForm/AccountForm'
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container d-flex flex-column align-items-center pt-4">
          <Route path="/" exact component={WelcomePage}/>
          <Route path="/create-account" exact component={AccountForm}/>
          <Route path="/edit-account/:id" exact component={AccountForm}/>
          <Route path="/account-preview" exact component={AccountForm}/>
          <Route path="/accounts/" exact component={AccountsPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
