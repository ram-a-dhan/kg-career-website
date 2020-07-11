export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_INITIAL_DATA':
      return action.payload;
    default:
      return state;
  }
};