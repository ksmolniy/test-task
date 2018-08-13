import PropTypes from 'prop-types';

const REACT_SECRET = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

export class User {
    constructor(userObj) {
        if (checkTypes(userObj, UserShape, 'User', '')) {
            Object.assign(this, userObj);
        }
        else {
            PropTypes.checkPropTypes(UserShape, userObj, 'arguments', 'User class');
            throw Error('Object not correct')
        };
    }
}

export const UserShape = {
    about: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    happiness: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    lastName: PropTypes.string.isRequired,
    multiSelect: PropTypes.arrayOf(PropTypes.string).isRequired,
    policy: PropTypes.bool.isRequired,
    prefer: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    surname: PropTypes.string.isRequired,
};

/**
 * Check object fields by react Proptypes
 * @param {Object} obj - checkable object
 * @param {Object} propTypes - propType object
 * @param {String} componentName - Name of component
 * @param {String} location - Location of component
 */
function checkTypes(obj = {}, propTypes = {}, componentName = '', location = '') {
    const keys = Object.keys(obj);

    return keys.every(key => propTypes[key](obj, key, componentName, location, null, REACT_SECRET) === null);
}