import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={css.list}>
    <p className={css.label}>
      Good: <span className={css.stats}>{good}</span>
    </p>
    <p className={css.label}>
      Neutal: <span className={css.stats}>{neutral}</span>
    </p>
    <p className={css.label}>
      Bad: <span className={css.stats}>{bad}</span>
    </p>
    <p className={css.label}>
      Total: <span className={css.stats}>{total}</span>
    </p>
    <p className={css.label}>
      Positive feedback:{' '}
      <span className={css.stats}>{positivePercentage}%</span>
    </p>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
