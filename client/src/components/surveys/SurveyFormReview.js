import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from "./formFields";
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return(
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return(
        <div>
            <h5>Please confirm your entries</h5>
            <div className="container">
                {reviewFields}
            </div>
            <button onClick={onCancel} className="red btn-flat white-text"  >
                <i className="material-icons left">keyboard_arrow_left</i>
                Back
            </button>
            <button onClick={() => submitSurvey(formValues, history)} className="teal btn-flat right white-text" >
                Send Survey
                <i className="material-icons right">send</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return{ formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));