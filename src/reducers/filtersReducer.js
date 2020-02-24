

export default (state, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_COMPLETED_STATUS':
      return {
        ...state,
        completed: action.completed
      }
    case 'SET_SORTBY':
      return {
        ...state,
        sortBy: action.sortBy
      }

    default: 
      return state;
  }
}