import React, { useContext, useEffect } from 'react';
import PaginationContext from '../../context/pagination-context';

export default () => {

  const { paginationSettings, paginationDispatch }  = useContext(PaginationContext);

  useEffect(() => {
    paginationDispatch({
      type: 'SET_ONPAGE',
      onPage: 1
    })
  }, [paginationSettings.tasksPerPage])

  console.log(paginationSettings, 'pagination settings')
  return (
    <div id="taskOrganiserContent">
      <h2>Task Organiser</h2>
      <div>
        <label htmlFor="tasksPerPage">Task Per Page</label>
        <input 
          type="number" 
          min="1"
          id="tasksPerPage" 
          value={paginationSettings.tasksPerPage}
          onChange={(e) => {
            let value = e.target.value * 1 /*{  convert to number if string } */
            let tasksPerPage = value < 1 ? 1 : value;
            paginationDispatch({
              type: 'SET_TASKS_PER_PAGE',
              tasksPerPage  
            })
          }}
        />
      </div>
    </div>
 
 
  )
}