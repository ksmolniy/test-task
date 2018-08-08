import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    }

    selectRow(e) {
        this.setState({
            selectedRow: +e.currentTarget.dataset.id,
        })
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
                <Link className="btn btn-primary" to="/">Back to home</Link>
                <Link className="btn btn-primary" to={this.state.selectedRow ? `/edit-account/${this.state.selectedRow}` : '/accounts'} >Edit selected account</Link>
            </div>
        </React.Fragment>)
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users,
    }
}

export default connect(mapStateToProps)(AccountsPage);