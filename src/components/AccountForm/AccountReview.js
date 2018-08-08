import React from 'react';
import { Field } from 'test-task-ui-kit';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AccountReview = ({ data, onSave, onBackToEditor }) => {
    return <React.Fragment>
        <div className="row w-100">
            <div className="col-4 border border-bottom-0">Step 1</div>
            <div className="col-4 border border-bottom-0">Step 2</div>
            <div className="col-4 border border-bottom-0">Step 3</div>
        </div>
        <div className="w-100 p-4">
            { Object.entries(data).map( ([key, value]) => <Field key={key} label={key} value={value} />) }
        </div>
        <div className="d-flex justify-content-between w-100">
            <Link className="btn btn-primary" to="/">Back to home</Link>
            <div>
                <button className="btn d-block btn-primary mb-2" onClick={onBackToEditor}>Back to editor</button>
                <button className="btn d-block btn-primary" onClick={onSave}>Save</button>
            </div>
        </div>
    </ React.Fragment>
};

AccountReview.propTypes = {
    data: PropTypes.object,
    onSave: PropTypes.func,
    onBackToEditor: PropTypes.func,
}

export default AccountReview;