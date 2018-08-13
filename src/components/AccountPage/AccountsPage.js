import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import * as routes from '~/constants/routes' 
import { User } from '../../data/User';

function getFullName(item) {
    return `${item.surname} ${item.firstName} ${item.lastName}`;
}

function createRow(item, selectRow, selectedRow) {
    return <tr data-id={item.id} onClick={selectRow} className={item.id === selectedRow ? 'table-active' : ''} key={item.id}>
        <td>{ getFullName(item) }</td>
        <td>{item.rating}</td>
        <td>{item.prefer}</td>
    </tr>
}

class AccountsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedRow: null,
        };

        this.selectRow = this.selectRow.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    selectRow(e) {
        this.setState({
            selectedRow: +e.currentTarget.dataset.id,
        })
    }

    editUser() {
        if (this.state.selectedRow) {
            this.props.getUserToForm(this.state.selectedRow);
            this.props.history.push(`${routes.EDIT_ACCOUNT}${this.state.selectedRow}`)
        }
    }

    render() {
        return (<React.Fragment>
            <h2>Accounts list</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Account name</th>
                        <th>Rating</th>
                        <th>Prefer</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.users.map(item => createRow(item, this.selectRow, this.state.selectedRow)) }
                </tbody>
            </table>
            <div className="d-flex justify-content-between w-100">
                <Link className="btn btn-primary" to={routes.MAIN}>Back to home</Link>
                <button className={ `btn btn-primary ${!this.state.selectedRow && 'disabled'}`} onClick={this.editUser} >Edit selected account</button>
            </div>
        </React.Fragment>)
    }
}

AccountsPage.propTypes = {
    users: PropTypes.arrayOf(PropTypes.instanceOf(User)),
};

export default AccountsPage;