import React from 'react';
import PropTypes from "prop-types";

function AnswerForm(props) {

  return (
    <React.Fragment>
      {props.answer.map((letter) =>
      <p>{letter.answerLetter}</p>
      )}
    </React.Fragment>
  )
}

AnswerForm.propTypes = {
    answer: PropTypes.array
}

export default AnswerForm;