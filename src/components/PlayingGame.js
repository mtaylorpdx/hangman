import React from "react";
import PropTypes from "prop-types";
import HangmanImage from './HangmanImage';
import AnswerForm from './AnswerForm';
import KeyList from './KeyList';




function PlayingGame(props) {
  return (
    <React.Fragment>
        <HangmanImage img= {props.img}/>
        <AnswerForm answer={props.answer}/>
        <KeyList keyList={props.keyList} />
    </React.Fragment>
  );
}
PlayingGame.propTypes = {
  img: PropTypes.number,
  answer: PropTypes.func,
  keyList: PropTypes.array,
}

export default PlayingGame;