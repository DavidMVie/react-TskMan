import React, {useContext, useEffect, useState} from 'react';

import TasksContext from '../../context/tasks-context';
import FiltersContext from '../../context/filters-context';
import getVisibleTasks from '../../selectors/tasks';
import TaskListItem from './TaskListItem';
import { CompletedToday } from './CompletedToday';
import { CompletedRangeList } from './CompletedRangeList'

export default () => {

  const { tasks, dispatch } = useContext(TasksContext)
  const { filters } = useContext(FiltersContext)

  const [ taskList, setTaskList ] = useState(tasks);

    useEffect(() => {
    setTaskList(getVisibleTasks(tasks, filters));
  }, [tasks, filters])



  return (
    <>
    <ul className="task-list">
      {tasks.length === 0 && <p>No tasks set yet.</p>}
      {taskList.length > 0 && taskList.map((task) => {
        return <TaskListItem key={task.description} task={task}/>
      })}
    </ul>

    {!filters.completed && <CompletedToday/>}
    
    </>
  )
}

