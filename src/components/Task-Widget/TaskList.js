import React, {useContext, useEffect, useState} from 'react';

import TasksContext from '../../context/tasks-context';
import FiltersContext from '../../context/filters-context';
import getVisibleTasks from '../../selectors/tasks';
import {IncompleteTasks} from './IncompleteTasks';
import { CompletedTasks } from './CompletedTasks'
import PaginationContext from '../../context/pagination-context';

 const TaskList = () => {

  const { tasks } = useContext(TasksContext);
  const { filters } = useContext(FiltersContext);
  const { paginationSettings } = useContext(PaginationContext);

  const [ taskList, setTaskList ] = useState(tasks);
  const [ incompleteTaskCount, setIncompleteTaskCount ] = useState(0)

  useEffect(() => {
    const filteredTasks = getVisibleTasks(tasks, filters);
    setIncompleteTaskCount(filteredTasks.length);
    const skip = (paginationSettings.onPage - 1) * paginationSettings.tasksPerPage
    setTaskList(filteredTasks.slice(skip, skip + paginationSettings.tasksPerPage))
  }, [tasks, filters, paginationSettings])

  const setTasksSentence = (tasksCount) => {
    if(tasksCount === 0) {
      return `no tasks`
    }else if (tasksCount === 1) {
      return `1 task`
    }else {
      return `${tasksCount} tasks`
    }
  }

  const getTasksMessage = () => {
    if(!filters.completed && filters.text === '') {
      return (<h3>You have {setTasksSentence(incompleteTaskCount)} to complete..</h3>)
    }else if (!filters.completed && filters.text !== '') {
      return (  incompleteTaskCount === 1 ? 
      <h3>{incompleteTaskCount} task matching search term</h3> 
        : 
      <h3>{incompleteTaskCount} tasks matching search term</h3>)
    }
  }

  return (
    <>
    {getTasksMessage()}
     {!filters.completed ? <IncompleteTasks haveTasks={tasks.length > 0} taskList={taskList} /> :  <CompletedTasks taskList={taskList} /> }
    </>
  )
}


export { TaskList as default }