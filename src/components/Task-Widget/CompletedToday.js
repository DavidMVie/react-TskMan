import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment';

import TaskListItem from './TaskListItem'; 
import TasksContext from '../../context/tasks-context';

export const CompletedToday = () => {

  const { tasks, dispatch } = useContext(TasksContext);
  const [ completedToday, setCompletedToday ] = useState([]);

  useEffect(() => {
   setCompletedToday(tasks.filter((task) => {
      return task.completed && task.completedDate > moment().startOf('day').valueOf()
    }))
  }, [tasks])
 
  return (
    <>
      <h3>Completed Today ({completedToday.length})</h3>
      <ul className="task-list">
        { completedToday.map((task) => {
          return <TaskListItem key={task.id} task={task}/>
        })}
      </ul>
      {completedToday.length === 0 && <p className="txt-center">Let's get going !</p>}

    </>
  )
}
