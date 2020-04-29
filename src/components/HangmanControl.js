import React from 'react';
import HangmanImage from './HangmanImage';
import AnswerForm from './AnswerForm';
import KeyList from './KeyList';
import randomWord from './Words';

class HangmanControl extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        guessed: [],
        mistake: 0
      }
    }

    handleGuess = (keyGuessed) => {
      const key = keyGuessed;
      console.log(key);
      console.log(key.letter);
      console.log(key.selected);
      this.setState(state => ({
        guessed: state.guessed.add(key),
        mistake: state.mistake + (state.answer.includes(key) ? 0 : 1)
      }));
    }

  render() {
    return (
      <React.Fragment>
        <HangmanImage />
        <AnswerForm />
        <KeyList onKeySelection={this.handleGuess} />
      </React.Fragment>
    )
  }
}

export default HangmanControl;