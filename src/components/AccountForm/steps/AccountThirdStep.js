import React from 'react';
import { FieldRating, FieldTextarea, FieldRange, FieldMultiSelect } from 'test-task-ui-kit';

import PropTypes from 'prop-types';

import { multiSelectOptions } from '~/constants';

class AccountThirdStep extends React.Component {
    constructor() {
        super();

        // this.state = {
        //     multiSelect: [],
        //     rating: 3,
        //     happiness: 50,
        //     about: 'Some details',
        // };

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
                <FieldMultiSelect
                    label="Multi select"
                    value={this.props.data.multiSelect}
                    options={multiSelectOptions}
                    onChange={(e) => this.handleChange(e,'multiSelect')}
                />
                <FieldRating
                    label="Rating"
                    value={this.props.data.rating}
                    onChange={(e) => this.handleChange(e,'rating')}
                />
                <FieldTextarea
                    label="About"
                    value={this.props.data.about}
                    onChange={(e) => this.handleChange(e,'about')}
                />
                <FieldRange
                    label="Happiness"
                    value={this.props.data.happiness}
                    onChange={(e) => this.handleChange(e,'happiness')}
                />
                <button className="btn btn-primary" onClick={this.props.submit}>Review</button>
            </React.Fragment>
        );
    }
}

AccountThirdStep.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default AccountThirdStep;