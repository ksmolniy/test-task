import { connect } from 'react-redux';
import { getUserToForm } from '~/store/form/actions/';

import AccountsPage from './AccountsPage';

import { PREFIX as USERS_PREFIX } from '~/store/users/types';

const mapStateToProps = state => {
    return {
        users: state[USERS_PREFIX],
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