import React, { useReducer, useEffect } from 'react';
import moment from 'moment';
import uuid from 'uuid';

import TaskBar from './Task-Bar/TaskBar'
import TaskWidget from './Task-Widget/TaskWidget'
import TasksContext from '../context/tasks-context';
import FiltersContext from '../context/filters-context';
import tasksReducer from '../reducers/tasksReducer'
import filtersReducer from '../reducers/filtersReducer';

export default () => {

  // Tasks Context:  state and dispatch function
  const [ tasks, dispatch ] = useReducer(tasksReducer, [])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('Tasks'));

    console.log('Stored Tasks ', storedTasks);
    if(storedTasks) {
      dispatch({
        type: 'POPULATE_TASKS',
        storedTasks
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks])

  const filtersReducerDefaultState = {
    text: '',
    completed: false,
    sortBy: 'dueDate'
  }

  // Filters Context: state and dispatch function
  const [ filters, filtersDispatch ] = useReducer(filtersReducer, filtersReducerDefaultState)

 
  return (
    <TasksContext.Provider value={{tasks, dispatch}}>
     <FiltersContext.Provider value={{filters, filtersDispatch}}>
      <div className="container dashboard">
        <TaskBar />
        <TaskWidget />
      </div>
      </FiltersContext.Provider>
    </TasksContext.Provider>
  )
}