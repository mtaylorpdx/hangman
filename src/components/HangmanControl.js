import React from 'react';
import HangmanImage from './HangmanImage';
import AnswerForm from './AnswerForm';
import KeyList from './KeyList';
import randomWord from './Words';

class HangmanControl extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        guessed: new Set([]),
        mistake: 0,
        answer: randomWord().split("").map(answerChar => ( { correctChoice: false, answerLetter: answerChar })),
        keyList: "abcdefghijklmnopqrstuvwxyz".split("").map(char => (
          { onKeySelection: false, letter: char}
        ))
      }
    }

    handleUpdateKeyList = (keyGuessed) => {
      const editedKeyList = this.state.keyList
        .filter(key => key.letter !== keyGuessed.letter)
        .concat(keyGuessed)
      this.handleCompareKey(keyGuessed);
      this.setState({
        keyList: editedKeyList,
      });
      console.log(this.state);
    }


    handleCompareKey = (keyGuessed) => {
      const answerCheck = this.state.answer
      for (let i=0; i < answerCheck.length; i++ ) {
        if (answerCheck[i].answerLetter === keyGuessed.letter) {
          answerCheck[i] = true;
          guessed.Push(keyGuessed)
        }
      }
      this.setState({
        answer: answerCheck
      });
    }

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
      }

    handleChangingSelectedKey = (letter) => {
        const selectedKey = this.props.keyList[letter];
        this.setState({selectedKey: selectedKey});
    }


  render() {
    return (
      <React.Fragment>
        <HangmanImage img= {this.state.mistake}/>
        <AnswerForm 
          answer={this.state.answer}/>
        <KeyList 
          keyList={this.state.keyList.filter(k => k.selected !== true)}
          onKeySelection={this.handleUpdateKeyList} />
      </React.Fragment>
    )
  }
}

// HangmanControl = {
//     masterItemList: PropTypes.object
//   };

export default HangmanControl;