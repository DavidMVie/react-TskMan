import React, { useState, useContext, useEffect } from 'react';

import TasksContext from '../context/tasks-context';
import FiltersContext from '../context/filters-context';
import paginationContext from '../context/pagination-context';

export const PaginationBar = () => {

  const { tasks } = useContext(TasksContext);
  const {filters} = useContext(FiltersContext);
  const { paginationSettings, paginationDispatch } = useContext(paginationContext)

  const incompleteTasks = tasks.filter((task) => {
    return !task.completed
  })


  const paginationLinks = () => {
    const links = Math.ceil(incompleteTasks.length / paginationSettings.tasksPerPage)
    let i = 1;
    const arr = [];
    while(i <= links) {
      arr.push(i)
      i++
    }
    return arr;
  }

  return (
    <div className="pagination-bar">
  
      <span>Results: 
        {!filters.completed ? 
          incompleteTasks.length
          :
          tasks.length - incompleteTasks.length
        }
      </span>
      
      <ul>
        {paginationLinks().map((pageNumber) => {
          console.log('Page Number ', pageNumber);
          console.log(' On page: ', paginationSettings.onPage);
          return (
            <li 
            key={pageNumber} 
            className={`paginate-li ${paginationSettings.onPage === pageNumber && "current-page"}`}
            onClick={() => {
              paginationDispatch({
                type: 'SET_ONPAGE',
                onPage: pageNumber
              })
            }}>
              {pageNumber}

          </li>)
        })}
      </ul>
    </div>
  )
}