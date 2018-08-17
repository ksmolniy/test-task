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
    return <tr data-id={item.id} onClick={selectRow} className={item.id === selectedRow ? 'c-table__row--selected' : ''} key={item.id}>
        <td>{ getFullName(item) }</td>
        <td>{item.rating}</td>
        <td>{item.prefer}</td>
    </tr>
}

const AccountsPage = ({ selectedRow, selectRow, users, editUser, averageRating }) => {
    return (<React.Fragment>
        <h2>Accounts list</h2>
        <table className="с-table u-w-100 u-m-b-2">
            <thead className="c-table__head">
                <tr>
                    <th>Account name</th>
                    <th>Rating (Average:{averageRating})</th>
                    <th>Prefer</th>
                </tr>
            </thead>
            <tbody className="c-table__body c-table__body--selectable">
                { users.map(item => createRow(item, selectRow, selectedRow)) }
            </tbody>
        </table>
        <div className="u-display-flex u-justify-content--between u-w-100">
            <Link className="c-btn c-btn--primary" to={routes.MAIN}>Back to home</Link>
            <button className="c-btn c-btn--primary" onClick={editUser} disabled={!selectedRow} >Edit selected account</button>
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
        editUser: ({ selectedRow, getUserToForm, history }) => () => {
            if (selectedRow) {
                getUserToForm(selectedRow);
                history.push(`${routes.EDIT_ACCOUNT}${selectedRow}`);
            }
        },
    })

)(AccountsPage);