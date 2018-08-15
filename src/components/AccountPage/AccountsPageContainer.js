import { connect } from 'react-redux';
import { getUserToForm } from '~/store/form/actions/';

import AccountsPage from './AccountsPage';

import { PREFIX as USERS_PREFIX } from '~/store/users/types';
import { User } from '../../data/User';
import { createSelector } from 'reselect';

const selectUsers = state => state[USERS_PREFIX];

const usersSelector = createSelector(
    [selectUsers],
    (users) => users.map(user => new User(user)),
);

const averageRatingSelector = createSelector(
    [selectUsers],
    (users) => Number(users.reduce((acc, user) => acc+user.rating,0) / users.size).toFixed(2),
)

const mapStateToProps = state => {
    const res =  {
        users: usersSelector(state),
        averageRating: averageRatingSelector(state),
    };
    return res;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserToForm(id) {
            dispatch(getUserToForm(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);