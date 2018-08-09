import { connect } from 'react-redux';
import { getUserToForm } from '~/store/form/actions/';

import AccountsPage from './AccountsPage';


const mapStateToProps = ({ users }) => {
    return {
        users,
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