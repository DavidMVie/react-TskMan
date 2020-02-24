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
  const [ tasks, dispatch ] = useReducer(tasksReducer, [    {
    id:  uuid(), 
    description: 'Drink Beer',
    dueDate: moment().add(4, 'days').valueOf(),
    notes: [],
    completed: false,
    completedDate: undefined
  },
  {
    id:  uuid(), 
    description: 'Fall Over',
    dueDate: moment().add(50, 'days').valueOf(),
    notes: [],
    completed: false,
    completedDate: undefined
  },
  {
    id:  uuid(), 
    description: 'Wawaweewa',
    dueDate: moment().subtract(4, 'days').valueOf(),
    notes: [],
    completed: false,
    completedDate: undefined
  },
  {
    id:  uuid(), 
    description: 'Buy Kebab',
    dueDate: moment().subtract(14, 'days').valueOf(),
    notes: [],
    completed: false,
    completedDate: undefined
  },
  {
    id:  uuid(), 
    description: 'My Sharona',
    dueDate: moment().subtract(14, 'days').valueOf(),
    notes: [],
    completed: true,
    completedDate: moment().subtract(2, 'weeks').valueOf()
  },
  {
    id:  uuid(), 
    description: 'Hopippla!',
    dueDate: moment().subtract(12, 'days').valueOf(),
    notes: [],
    completed: true,
    completedDate: moment().subtract(14, 'hour').valueOf()
  },
  {
    id:  uuid(), 
    description: 'Jimi!',
    dueDate: moment().subtract(12, 'days').valueOf(),
    notes: [],
    completed: true,
    completedDate: moment().subtract(50, 'days').valueOf()
  },
])

  const filtersReducerDefaultState = {
    text: '',
    completed: false,
    sortBy: 'dueDate'
  }

  // Filters Context: state and dispatch function
  const [ filters, filtersDispatch ] = useReducer(filtersReducer, filtersReducerDefaultState)


  // Retrieve stored tasks on DOM Mount
  // for now just some dummy data




  
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