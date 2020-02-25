import React, {useContext, useEffect, useState} from 'react';

import TasksContext from '../../context/tasks-context';
import FiltersContext from '../../context/filters-context';
import getVisibleTasks from '../../selectors/tasks';
import {IncompleteTasks} from './IncompleteTasks';
import { CompletedTasks } from './CompletedTasks'


export default () => {

  const { tasks } = useContext(TasksContext)
  const { filters } = useContext(FiltersContext)

  const [ taskList, setTaskList ] = useState(tasks);

    useEffect(() => {
    setTaskList(getVisibleTasks(tasks, filters));
  }, [tasks, filters])

  const setTasksSentence = (tasksCount) => {
    if(tasksCount === 0) {
      return `no tasks`
    }else if (tasksCount === 1) {
      return `1 task`
    }else {
      return `${tasksCount} tasks`
    }
  }

  return (
    <>
     {!filters.completed && <h3>You have {setTasksSentence(taskList.length)} to complete..</h3>}
     {!filters.completed ? <IncompleteTasks haveTasks={tasks.length > 0} taskList={taskList} /> :  <CompletedTasks taskList={taskList} /> }
    </>
  )
}

