import React from 'react';
import { Field } from 'test-task-ui-kit';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as routes from '~/constants/routes';

const AccountReview = ({ data, onSave, stepChanged }) => {
    return <React.Fragment>
        <div className="c-navbar u-w-100">
            <div className="c-navbar__item" onClick={()=>stepChanged(1)}>Step 1</div>
            <div className="c-navbar__item" onClick={()=>stepChanged(2)}>Step 2</div>
            <div className="c-navbar__item" onClick={()=>stepChanged(3)}>Step 3</div>
            <div className="c-navbar__item c-navbar__item--active">Preview</div>
        </div>
        <div className="c-account-preview">
            { Object.entries(data).map( ([key, value]) => <Field key={key} label={key} value={value} />) }
        </div>
        <div className="u-display-flex u-justify-content--between u-w-100">
            <Link className="c-btn c-btn--primary" to={routes.MAIN}>Back to home</Link>
            <button className="c-btn c-btn--primary" onClick={onSave}>Save</button>
        </div>
    </ React.Fragment>
};

AccountReview.propTypes = {
    data: PropTypes.object,
    onSave: PropTypes.func,
    onBackToEditor: PropTypes.func,
}

export default AccountReview;