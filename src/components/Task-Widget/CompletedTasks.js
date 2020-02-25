import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';

import TasksContext from '../../context/tasks-context';
import TaskListItem from './TaskListItem';

export const CompletedTasks = (props) => {
  
  const [ completedRange, setCompletedRange ] = useState('day')

  // useEffect(() => {
  //   console.log(completedRange)
  // }, [completedRange])

  const getCompletedTasks = () => {
     return props.taskList.filter((task) => {
      return task.completed && task.completedDate > moment().startOf(completedRange).valueOf()
    }).map((task) => {
      return <TaskListItem key={task.id} task={task}/>
    })
  }

  return (
    <>
    <h3>Completed</h3> 
    <div className="completed-range-wrapper">
      <select className="select-css" onChange={(e) => {
        setCompletedRange(e.target.value)}}>
        <option value="day">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
        <option value="year">This Year</option>
    </select>
    </div>
    <ul className="task-list">
      { getCompletedTasks() }
    </ul>
    </>
  )
}
