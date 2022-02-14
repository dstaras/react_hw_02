import React from "react";

const FeedbackOptions = ({ onLeaveFeedback, keyBtn }) => {
  return keyBtn.map((name) => (
    <button type="button" onClick={() => onLeaveFeedback(name)} key={name}>
      {name}
    </button>
  ));
};

export default FeedbackOptions;
