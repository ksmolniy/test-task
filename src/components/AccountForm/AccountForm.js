import React from 'react';
import AccountFirstStep from './steps/AccountFirstStep';
import AccountSecondStep from './steps/AccountSecondStep';
import AccountThirdStep from './steps/AccountThirdStep';
import AccountReview from './AccountReview';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { updateFormState, clearForm } from '~/store/form/actions';
import { PREFIX as FORM_PREFIX } from '~/store/form/types';
import { createUser, updateUser } from '~/store/users/actions';

import * as routes from '~/constants/routes';
import { compose, withHandlers, setPropTypes } from 'recompose';

const AccountForm = ({ step, data = {}, submitStep, save, backToEditor, dataChanged, stepChanged }) => {
    return (<React.Fragment>
        <h2>{step !== 4 ? `Editor step ${step}` : 'Editor Review'}</h2>
        { step === 1 && <AccountFirstStep submit={submitStep} onChange={dataChanged} data={data} /> }
        { step === 2 && <AccountSecondStep submit={submitStep} onChange={dataChanged} data={data} /> }
        { step === 3 && <AccountThirdStep submit={submitStep} onChange={dataChanged} data={data} /> }
        { step === 4 && <AccountReview onSave={save} stepChanged={stepChanged} onBackToEditor={backToEditor} data={data} /> }
    </React.Fragment>)
}

const mapStateToProps = state => {
    return {
        step: state[FORM_PREFIX].step,
        data: state[FORM_PREFIX].data,
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
        editUser(data) {
            dispatch(updateUser(data));
            dispatch(clearForm());
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        submitStep: ({ updateFormState, step, data }) => () => {
            updateFormState(step+1, data);
        },
        dataChanged: ({ updateFormState, step, data }) => newData => {
            updateFormState(step, newData);
        },
        stepChanged: ({ updateFormState, data }) => step => {
            updateFormState(step, data);
        },
        save: ({ match, editUser, createUser, data, history }) => () => {
            try {
                if (match.params.id) {
                    editUser(data);
                } else {
                    createUser(data);
                }
                history.push(routes.ACCOUNTS)
            } catch(e) {
                alert(e.message);
            }
        },
        backToEditor: ({ updateFormState, data }) => () => {
            updateFormState(1, data)
        },
    }),
    setPropTypes({
        step: PropTypes.number.isRequired,
        data: PropTypes.object,
    }),
)(AccountForm);