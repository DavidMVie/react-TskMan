import React, { useReducer, useEffect } from 'react';

import TaskBar from './Task-Bar/TaskBar'
import TaskWidget from './Task-Widget/TaskWidget'
import TasksContext from '../context/tasks-context';
import FiltersContext from '../context/filters-context';
import PaginationContext from '../context/pagination-context';
import tasksReducer from '../reducers/tasksReducer'
import filtersReducer from '../reducers/filtersReducer';
import paginationReducer from '../reducers/paginationReducer';

export default () => {

  // Tasks Context:  state and dispatch function
  const [ tasks, dispatch ] = useReducer(tasksReducer, [])
  const [ paginationSettings, paginationDispatch ] = useReducer(paginationReducer, { onPage: 1, tasksPerPage: 5})

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('Tasks'));
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
      <PaginationContext.Provider value={{paginationSettings, paginationDispatch}}>
        <div className="container dashboard">
          <TaskBar />
          <TaskWidget />
        </div>
        </PaginationContext.Provider>
        </FiltersContext.Provider>
    </TasksContext.Provider>
  )
}
