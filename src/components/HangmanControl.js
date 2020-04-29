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
        answer: randomWord(),
        keyList: "abcdefghijklmnopqrstuvwxyz".split("").map(char => (
          { onKeySelection: false, letter: char}
        ))
      }
    }


    // handleGuess = (keyGuessed) => {
    //   const key = keyGuessed;
    //   this.setState(state => ({
    //     guessed: state.guessed.add(key),
    //     mistake: state.mistake + (state.answer.includes(key) ? 0 : 1)
    //   }));
    // }

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

    // handleCompareKey = (keyGuessed) => {
    //     if (keyGuessed === this.state.answer.includes(keyGuessed)){
            
    //     } else if {
    //         <img src={this.props.image[this.state.mistake]}
    //     }
    // }

    handleChangingSelectedKey = (letter) => {
        const selectedKey = this.props.keyList[letter];
        this.setState({selectedKey: selectedKey});
    }


  render() {
    return (
      <React.Fragment>
        <HangmanImage />
        <AnswerForm />
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