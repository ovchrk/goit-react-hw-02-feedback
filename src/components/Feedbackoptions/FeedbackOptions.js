import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(key => {
        return (
          <li key={key}>
            <button type="button" name={key} onClick={onLeaveFeedback}>
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
