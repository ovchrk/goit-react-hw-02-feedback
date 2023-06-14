import React from 'react';
import PropTypes from 'prop-types';
import css from '../Feedbackoptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {Object.keys(options).map(key => {
        return (
          <li key={key}>
            <button
              type="button"
              name={key}
              onClick={onLeaveFeedback}
              className={css.option}
            >
              {key}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
// export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <ul>
//     <li>
//       <button type="button" onClick={handleGood}>
//         Good
//       </button>
//     </li>
//     <li>
//       <button type="button" onClick={handleNeutral}>
//         Neutral
//       </button>
//     </li>
//     <li>
//       <button type="button" onClick={handleBad}>
//         Bad
//       </button>
//     </li>
//   </ul>
// );
// FeedbackOptions.propTypes = {
//   handleGood: PropTypes.string,
//   handleNeutral: PropTypes.string,
//   handleBad: PropTypes.string,
// };
