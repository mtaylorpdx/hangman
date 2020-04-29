import React from 'react';
import HangmanImage from './HangmanImage';
import AnswerForm from './AnswerForm';
import KeyList from './KeyList';
import randomWord from './Words';
import PlayingGame from './PlayingGame';

class HangmanControl extends React.Component {

    static defaultProp = {
        maxWrong: 6,
    }

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
    }


    handleCompareKey = (keyGuessed) => {
      const answerCheck = this.state.answer
      let mistakeCheck = 1
      for (let i=0; i < answerCheck.length; i++ ) {
        if (answerCheck[i].answerLetter === keyGuessed.letter) {
          answerCheck[i].correctChoice = true;
          mistakeCheck = 0;
        }
      }
      this.setState({
        mistake: this.state.mistake + mistakeCheck,
        answer: answerCheck
      });
    }
    
    handleAnswerDisplay = () => {
      console.log(this.state.answer);
      const answerDisplay = this.state.answer.map((char) => {
        console.log(char.correctChoice);
        if (char.correctChoice === true) {
          return char.answerLetter;
        } else {
          return "__";
        }
      })
      return answerDisplay; 
    }

    handleChangingSelectedKey = (letter) => {
        const selectedKey = this.props.keyList[letter];
        this.setState({selectedKey: selectedKey});
    }


  render() {
      // const isWinner = this.
      let currentlyVisibleState = null;
      let gameStat = "You lose!";

      // if (gameOver) {
      //   gameStat = "You lose!"
      // }


        if (this.state.mistake >= this.props.maxWrong) {
          currentlyVisibleState = <p>{gameStat}</p>
        }
        else {
          
          currentlyVisibleState = <PlayingGame img= {this.state.mistake} answer={this.handleAnswerDisplay()} keyList={this.state.keyList.filter(k => k.selected !== true)}
          onKeySelection={this.handleUpdateKeyList}/>

          // <HangmanImage img= {this.state.mistake}/>
          // <AnswerForm 
          //   answer={this.handleAnswerDisplay()}/>
          // <KeyList
          //   keyList={this.state.keyList.filter(k => k.selected !== true)}
          //   onKeySelection={this.handleUpdateKeyList} />     
        }
 
  

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>

    )
  }
}

// HangmanControl = {
//     masterItemList: PropTypes.object
//   };

export default HangmanControl;