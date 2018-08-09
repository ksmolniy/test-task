import React from 'react';
import { FieldRadioGroup, FieldSelect, FieldDate, FieldCheckBox } from 'test-task-ui-kit';
import PropTypes from 'prop-types';

import { prefers, countries } from '~/constants';

import AccountFormStep from './AccountFormStep';

const AccountSecondStep = ({ data = {}, submit, handleChange }) => {
    return (
        <React.Fragment>
            <FieldRadioGroup
                label="Prefer"
                value={data.prefer}
                onChange={(e) => handleChange(e,'prefer')}
                options={prefers}
            />
            <FieldDate
                label="Date"
                value={data.date}
                onChange={(e) => handleChange(e,'date')} 
            />
            <FieldSelect
                label="County"
                placeholder="County"
                options={countries}
                value={data.country}
                onChange={(e) => handleChange(e,'country')} 
            />
            <FieldCheckBox
                label="Policy"
                text="I aggree"
                value={data.policy}
                onChange={(e) => handleChange(e,'policy')} 
            />
            <button className="btn btn-primary" onClick={submit}>Next step</button>
        </React.Fragment>
    );
}

AccountSecondStep.propTypes = {
    submit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.object,
}

export default AccountFormStep(AccountSecondStep);