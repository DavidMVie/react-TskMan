import React, { useState, useContext, useEffect } from 'react';

import TasksContext from '../context/tasks-context';
import FiltersContext from '../context/filters-context';
import paginationContext from '../context/pagination-context';

export const PaginationBar = () => {

  const { tasks } = useContext(TasksContext);
  const {filters} = useContext(FiltersContext);
  const { paginationSettings, paginationDispatch } = useContext(paginationContext)

  const incompleteTasks = tasks.filter((task) => {
    return !task.completed && task.description.toLowerCase().includes(filters.text.toLowerCase())
  })


  const paginationLinks = () => {
    let links;
    console.log(filters.completed)
    if(!filters.completed) {
      links = Math.ceil(incompleteTasks.length / paginationSettings.tasksPerPage)
    }else {
      links = Math.ceil((tasks.length - incompleteTasks.length) / paginationSettings.tasksPerPage)
    }

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
  
      <span>Results:  <span className="results-count">
        {!filters.completed ? 
          incompleteTasks.length
          :
          tasks.length - incompleteTasks.length
        }
        </span>
      </span>
      
      <ul>
        <span className="pagination-bar-pages">Pages: </span>
        {paginationLinks().map((pageNumber) => {
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