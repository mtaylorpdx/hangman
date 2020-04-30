import keyListReducer from '../../reducers/key-list-reducer';


describe('keyListReducer', () => {
  
  let action;
    
    const keyList = "abcdefghijklmnopqrstuvwxyz".split("").map(char => (
        { onKeySelection: false, letter: char}
      ))

  test('Should return default key list if no letters have been selected', () => {(char => (
      { onKeySelection: false, letter: char}
    ))
  expect(keyListReducer({}, {})).toEqual({});
});


  test('Should return updated key list if a letter has been selected', () => {
    action ={
      type: 'SELECT_KEY',
      letter: 'y',
      selected: false
    }
    expect(keyListReducer( {}, action)).toEqual({
      [keyList[25].letter] : {
        letter: 'y',
        selected: true
      }
    });
  });
});


