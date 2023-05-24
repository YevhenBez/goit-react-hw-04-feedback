import React from 'react';
import css from './css/feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(btn => (
    <button
      className={css.buttonOptions}
      key={btn}
      type="button"
      onClick={onLeaveFeedback}
    >
      {btn}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;