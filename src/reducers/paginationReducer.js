export default (state, action) => {
  switch (action.type) {
    case 'SET_ONPAGE':
      return {
        ...state,
        onPage: action.onPage
      }
    case 'SET_TASKS_PER_PAGE':  
      return {
        ...state,
        tasksPerPage: action.tasksPerPage
      }
    default: 
      return state
  }

}
