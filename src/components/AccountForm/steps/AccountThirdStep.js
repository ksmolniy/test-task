import React from 'react';
import { FieldRating, FieldTextarea, FieldRange, FieldMultiSelect } from 'test-task-ui-kit';
import PropTypes from 'prop-types';

import { multiSelectOptions } from '~/constants';

import AccountFormStep from './AccountFormStep';

const AccountThirdStep = ({ data = {}, handleChange, submit }) => {
    return (
        <React.Fragment>
            <FieldMultiSelect
                label="Multi select"
                value={data.multiSelect}
                options={multiSelectOptions}
                onChange={(e) => handleChange(e,'multiSelect')}
            />
            <FieldRating
                label="Rating"
                value={data.rating}
                onChange={(e) => handleChange(e,'rating')}
            />
            <FieldTextarea
                label="About"
                value={data.about}
                onChange={(e) => handleChange(e,'about')}
            />
            <FieldRange
                label="Happiness"
                value={data.happiness}
                onChange={(e) => handleChange(e,'happiness')}
            />
            <button className="c-btn c-btn--primary" onClick={submit}>Review</button>
        </React.Fragment>
    );
}

AccountThirdStep.propTypes = {
    handleChange: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    data: PropTypes.object,
}

export default AccountFormStep(AccountThirdStep);