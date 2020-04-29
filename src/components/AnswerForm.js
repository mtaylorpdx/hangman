import React from 'react';
import PropTypes from "prop-types";

function AnswerForm(props) {
  console.log(props.answer);
  return (
    <React.Fragment>
        <h2>{ props.answer } </h2>
      {/* {props.answer.map((currentAnswer) =>
      <p>{currentAnswer.answerLetter}</p>
      )} */}
    </React.Fragment>
  )
}

AnswerForm.propTypes = {
    answer: PropTypes.array
}

export default AnswerForm;