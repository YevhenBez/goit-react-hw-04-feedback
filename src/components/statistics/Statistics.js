import React from 'react';
import css from './css/statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <span className={css.statistics}>Good:{good}</span>
    <span className={css.statistics}>Neutral:{neutral}</span>
    <span className={css.statistics}>Bad:{bad}</span>
    <span className={css.statistics}>Total:{total}</span>
    <span className={css.statistics}>
      Positive feedback:{positivePercentage}%
    </span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;