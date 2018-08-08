import React from 'react';
import { FieldTextInput, FieldNumberInput, FieldSelect } from 'test-task-ui-kit';

import PropTypes from 'prop-types';
import { genders } from '~/constants';

// seems like all steps are almost the same
// maybe better to create hoc?
    class AccountFirstStep extends React.Component {
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
                <FieldTextInput
                    label="First name"
                    placeholder="First name"
                    value={this.props.data.firstName}
                    onChange={(e) => this.handleChange(e,'firstName')}
                />
                <FieldTextInput
                    label="Last name"
                    placeholder="Last name"
                    value={this.props.data.lastName}
                    onChange={(e) => this.handleChange(e,'lastName')}
                />
                <FieldTextInput
                    label="Surname"
                    placeholder="Surname"
                    value={this.props.data.surname} 
                    onChange={(e) => this.handleChange(e,'surname')}
                />
                <FieldSelect
                    label="Gender"
                    placeholder="Gender"
                    options={genders}
                    value={this.props.data.gender}
                    onChange={(e) => this.handleChange(e,'gender')} 
                />
                <FieldNumberInput
                    label="Age"
                    placeholder="Age"
                    value={this.props.data.age}
                    onChange={(e) => this.handleChange(e,'age')}
                />

                <button className="btn btn-primary" onClick={this.props.submit}>Next step</button>
            </React.Fragment>
        );
    }
}

AccountFirstStep.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default AccountFirstStep;