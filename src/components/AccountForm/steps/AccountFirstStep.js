import React from 'react';
import { FieldTextInput, FieldNumberInput, FieldSelect } from 'test-task-ui-kit';

import PropTypes from 'prop-types';
import { genders } from '~/constants';

import AccountFormStep from './AccountFormStep';

const AccountFirstStep = ({ data = {}, submit, handleChange }) => {
    return (
        <React.Fragment>
            <FieldTextInput
                label="First name"
                placeholder="First name"
                value={data.firstName}
                onChange={(e) => handleChange(e,'firstName')}
            />
            <FieldTextInput
                label="Last name"
                placeholder="Last name"
                value={data.lastName}
                onChange={(e) => handleChange(e,'lastName')}
            />
            <FieldTextInput
                label="Surname"
                placeholder="Surname"
                value={data.surname} 
                onChange={(e) => handleChange(e,'surname')}
            />
            <FieldSelect
                label="Gender"
                placeholder="Gender"
                options={genders}
                value={data.gender}
                onChange={(e) => handleChange(e,'gender')} 
            />
            <FieldNumberInput
                label="Age"
                placeholder="Age"
                value={data.age}
                onChange={(e) => handleChange(e,'age')}
            />
            <button className="btn btn-primary" onClick={submit}>Next step</button>
        </React.Fragment>
    );
}

AccountFirstStep.propTypes = {
    submit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.object,
}

export default AccountFormStep(AccountFirstStep);