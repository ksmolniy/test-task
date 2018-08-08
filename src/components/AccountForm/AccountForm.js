import React from 'react';
import AccountFirstStep from './steps/AccountFirstStep';
import AccountSecondStep from './steps/AccountSecondStep';
import AccountThirdStep from './steps/AccountThirdStep';
import AccountReview from './AccountReview';

import { connect } from 'react-redux';

import { updateFormState, clearForm } from '~/store/form/actions'
import { createUser } from '~/store/users/actions'

class AccountForm extends React.Component {
    constructor() {
        super();

        this.submitStep = this.submitStep.bind(this);
        this.dataChanged = this.dataChanged.bind(this);
        this.backToEditor = this.backToEditor.bind(this);
        this.save = this.save.bind(this);
    }

    submitStep() {
        this.props.updateFormState(this.props.step + 1, this.props.data);
    }

    dataChanged(data) {
        this.props.updateFormState(this.props.step, data);
    }

    save() {
        this.props.createUser(this.props.data);
        this.props.history.push(`/accounts`)
    }

    backToEditor() {
        this.props.updateFormState(1, this.props.data);
    }

    render() {
        return (<React.Fragment>
            <h2>{this.props.step !== 4 ? `Editor step ${this.props.step}` : 'Editor Review'}</h2>
            { this.props.step === 1 && <AccountFirstStep submit={this.submitStep} onChange={this.dataChanged} data={this.props.data} /> }
            { this.props.step === 2 && <AccountSecondStep submit={this.submitStep} onChange={this.dataChanged} data={this.props.data} /> }
            { this.props.step === 3 && <AccountThirdStep submit={this.submitStep} onChange={this.dataChanged} data={this.props.data} /> }
            { this.props.step === 4 && <AccountReview onSave={this.save} onBackToEditor={this.backToEditor} data={this.props.data} /> }
        </React.Fragment>)
    }
}

const mapStateToProps = ({ form }) => {
    return {
        step: form.step,
        data: form.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormState(step, data) {
            dispatch(updateFormState(step, data));
        },
        createUser(data) {
            dispatch(createUser(data));
            dispatch(clearForm());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);