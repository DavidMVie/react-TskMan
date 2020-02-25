import React from 'react'

import { CompletedToday } from './CompletedToday'
import TaskListItem  from './TaskListItem';

export const IncompleteTasks = (props) => {
  return (
    <>
    <ul className="task-list incomplete">
    {!props.haveTasks && <p className="no-tasks">No tasks set yet.</p>}
    {/* taskLIst is the list of tasks once the users choice of filters and sorts have been applied*/}
    {props.taskList.length > 0 && props.taskList.map((task) => {
      return <TaskListItem key={task.description} task={task}/>
    })}
    </ul>
    <CompletedToday />
    </>
  )
}
