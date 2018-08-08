import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum quis temporibus ipsa incidunt maiores impedit tempora in magnam perferendis.';

const WelcomePage = () => {
    return (<React.Fragment>
        <img src={logo} />
        <p>{lorem}</p>
        <Link className="btn btn-primary mb-2" to="/create-account">Create account</Link>
        <Link className="btn btn-primary" to="/accounts">Show existing accoutns</Link>
    </React.Fragment>)
}


export default WelcomePage;