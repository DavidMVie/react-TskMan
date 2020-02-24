import React, { useContext } from 'react'
import moment from 'moment';

import TaskListItem from './TaskListItem'; 
import TasksContext from '../../context/tasks-context';

export const CompletedToday = () => {

  const { tasks, dispatch } = useContext(TasksContext);

  return (
    <>
      {console.log('this runs')}
      <h3>Completed Today</h3>
      <ul className="task-list">
        {(tasks.filter((task) => {
          return task.completed && task.completedDate > moment().startOf('day').valueOf()
        })).map((task) => {
          return <TaskListItem key={task.id} task={task}/>
        })}
      </ul>
    </>
  )
}
