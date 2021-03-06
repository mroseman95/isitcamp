import React from 'react';

import './StartSurveyButton.scss';

export default function StartSurveyButton(props) {
  return (
    <button
      id="start-survey-button"
      disabled={props.disabled}
      onMouseDown={props.surveyInProgress ? props.onContinueSurvey : props.onStartSurvey}
    >
      {props.surveyInProgress ? 'Continue' : 'Start'}
    </button>
  );
}
