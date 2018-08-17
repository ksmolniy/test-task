import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

import store from '~/store/';
import { setDefaulFormValue } from '~/store/form/actions';

import { lorem } from '~/constants'
import * as routes from '~/constants/routes' 


function dispatchDefaultValues() {
    store.dispatch(setDefaulFormValue());
}

const WelcomePage = () => {
    return (<React.Fragment>
        <img src={logo} alt="sorry" />
        <p>{lorem}</p>
        <Link className="c-btn c-btn--primary u-m-b-2" to={routes.CREATE_ACCOUNT} onClick={dispatchDefaultValues}>Create account</Link>
        <Link className="c-btn c-btn--primary" to={routes.ACCOUNTS}>Show existing accoutns</Link>
    </React.Fragment>)
}

export default WelcomePage;