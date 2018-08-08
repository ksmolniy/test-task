import React from 'react';
import { FieldRadioGroup, FieldSelect, FieldDate, FieldCheckBox } from 'test-task-ui-kit';

import PropTypes from 'prop-types';

import { prefers, countries } from '~/constants'

class AccountSecondStep extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, field) {
        this.props.onChange({
            ...this.props.data,
            [field]: e.target.value,
        });
    }

    render() {
        return (
            <React.Fragment>
                <FieldRadioGroup
                    label="Prefer"
                    value={this.props.data.prefer}
                    onChange={(e) => this.handleChange(e,'prefer')}
                    options={prefers}
                />
                <FieldDate
                    label="Date"
                    value={this.props.data.date}
                    onChange={(e) => this.handleChange(e,'date')} 
                />
                <FieldSelect
                    label="County"
                    placeholder="County"
                    options={countries}
                    value={this.props.data.country}
                    onChange={(e) => this.handleChange(e,'country')} 
                />
                <FieldCheckBox
                    label="Policy"
                    text="I aggree"
                    value={this.props.data.policy}
                    onChange={(e) => this.handleChange(e,'policy')} 
                />
                <button className="btn btn-primary" onClick={this.props.submit}>Next step</button>
            </React.Fragment>
        );
    }
}

AccountSecondStep.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default AccountSecondStep;