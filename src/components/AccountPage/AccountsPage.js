import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import * as routes from '~/constants/routes' 
import { User } from '../../data/User';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { compose, setPropTypes, withState, withHandlers } from 'recompose';

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

const AccountsPage = ({ selectedRow, selectRow, users, editUser }) => {
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
                { users.map(item => createRow(item, selectRow, selectedRow)) }
            </tbody>
        </table>
        <div className="d-flex justify-content-between w-100">
            <Link className="btn btn-primary" to={routes.MAIN}>Back to home</Link>
            <button className={ `btn btn-primary ${!selectedRow && 'disabled'}`} onClick={editUser} >Edit selected account</button>
        </div>
    </React.Fragment>)
}


export default compose(
    withState('selectedRow', 'changeSelectedRow', null),
    setPropTypes({
        users: ImmutablePropTypes.listOf(PropTypes.instanceOf(User)),
    }),
    withHandlers({
        selectRow: ({ changeSelectedRow }) => event => changeSelectedRow(+event.currentTarget.dataset.id),
        editUser: ({ selectedRow, getUserToForm, history }) => event => {
            if (selectedRow) {
                getUserToForm(selectedRow);
                history.push(`${routes.EDIT_ACCOUNT}${this.state.selectedRow}`);
            }
        },
    })

)(AccountsPage);