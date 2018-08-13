import { connect } from 'react-redux';
import { getUserToForm } from '~/store/form/actions/';

import AccountsPage from './AccountsPage';

import { PREFIX as USERS_PREFIX } from '~/store/users/types';
import { User } from '../../data/User';

const mapStateToProps = state => {
    return {
        users: state[USERS_PREFIX].map(user => new User(user)),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserToForm(id) {
            dispatch(getUserToForm(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);