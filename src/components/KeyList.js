import React from 'react';
import Key from './Key';
import PropTypes from 'prop-types';


  // function generateButtons() {
  //  const keyList = "abcdefghijklmnopqrstuvwxyz".split("").map(char => (
  //   { onKeySelection: false, letter: char}
  //   ));

    // <button key={char} value={char} onClick={this.handleGuess}>{char}</button>


function KeyList(props) {

  return (
    <React.Fragment>
      {props.keyList.map((key) => 
        <Key 
          whenKeyClicked = {props.onKeySelection}
          letter = {key.letter} 
          value={key.letter}
          selected = {key.onKeySelection}/>
      )}
    </React.Fragment>
  )
}

KeyList.propTypes = {
  keyList: PropTypes.array,
  onKeySelection: PropTypes.func,
}

export default KeyList;