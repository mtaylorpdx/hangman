export default (state = {}, action) => {
    const { letter, selected } = action;
    switch (action.type) {
    case 'SELECT_KEY':
        return Object.assign({}, state, {
            [letter]: {
                letter: letter,
                selected: selected
            }
        });
        default:
            return state;
    }
}
