import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutal: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total: <span>{total}</span>
      {/* Total: <span>{this.countTotalFeedback()}</span> */}
    </p>
    <p>
      Positive feedback: <span>{positivePercentage}%</span>
    </p>
    {/* <p>
              Positive feedback:{' '}
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </p> */}
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
// export default Statistics;
