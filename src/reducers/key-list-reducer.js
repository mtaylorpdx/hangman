export default (state = {}, action) => {
   
    const { letter, selected, keyList } = action;
    switch (action.type) {
    case 'SELECT_KEY':
        return Object.assign({}, state, {
            keyList: keyList,
            [letter]: {
                letter: letter,
                selected: selected,
            }
        });
        default:
            return state;
    }
}
