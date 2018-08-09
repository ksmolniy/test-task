import React from 'react';

const AccountFormStep = (Step) => class extends React.Component {
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
        return <Step {...this.props} handleChange={this.handleChange} />
    }
}

export default AccountFormStep;