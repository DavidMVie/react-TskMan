/*
  model of a Task
  tasks is an array of individual Task objects where each task object has the following fields, with the following defaults 

  {
    id: typeof uuid()  // set programatically
    description: '',
    dueDate: undefined // type Moment timestamp
    notes: [], // type object {note: '', created: moment timestamp}
    completed: false // type Boolean
    completedDate: undefined // type Moment timeStamp
  }
*/

import moment from 'moment';

export default (state, action) => {
  switch (action.type) {
    case 'POPULATE_TASKS':
      return action.tasks;
    case 'ADD_TASK':
      return [
        ...state,
        action.task
      ]
    case 'MARK_COMPLETE':
      const taskToMarkCompleted = state.find((task) => {
         return task.id === action.id
      })
      taskToMarkCompleted.completed = true;
      taskToMarkCompleted.completedDate = moment().valueOf();

      const newState = state.filter((task) => {
        return task.id !== action.id
      })

      return [
         ...newState,
         taskToMarkCompleted
      ]


    case 'MARK_INCOMPLETE':
      return state.map((task) => {
        if(task.id === action.id) {
          return {
            ...task,
            completed: false,
            completedDate:  undefined
          }
        }else {
          return task;
        }
      })

    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.id)

    case 'WIPE_OUT': 
      return []

    case 'CHANGE_DUE_DATE':
      return state.map((task) => {
        if(task.id === action.id) {
          return {
            ...task,
            dueDate: action.dueDate
          }
        }else {
          return task;
        }
      })
    case 'ADD_NOTE': 
      return state; // placeholder
    default: 
      return state
  }
}
