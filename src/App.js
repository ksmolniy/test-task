import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AccountsPageContainer from './components/AccountPage/AccountsPageContainer';
import AccountForm from './components/AccountForm/AccountForm';
import './App.css';

import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container d-flex flex-column align-items-center pt-4">
          <Route path={routes.MAIN} exact component={WelcomePage}/>
          <Route path={routes.CREATE_ACCOUNT} exact component={AccountForm}/>
          <Route path={routes.EDIT_ACCOUNT_WITH_ID} exact component={AccountForm}/>
          <Route path={routes.ACCOUNTS} exact component={AccountsPageContainer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
