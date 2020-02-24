import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';

import TasksContext from '../../context/tasks-context';
import TaskListItem from './TaskListItem';

export const CompletedRangeList = () => {

  const { tasks, dispatch } = useContext(TasksContext);
  const [ completedRange, setCompletedRange ] = useState('day')

  useEffect(() => {
    console.log(completedRange)
  }, [completedRange])

  return (
    <>
    <h3>Completed</h3> 
    <select onChange={(e) => {
      setCompletedRange(e.target.value)}}>
      <option value="day">Today</option>
      <option value="week">This Week</option>
      <option value="month">This Month</option>
      <option value="year">This Year</option>
    </select>
    <ul className="task-list">
      {(tasks.filter((task) => {
        return task.completed && task.completedDate > moment().startOf(completedRange).valueOf()
      })).map((task) => {
        return <TaskListItem key={task.description} task={task}/>
      })}
      {console.log(moment().startOf('day').valueOf())}
    </ul>
    </>
  )
}
