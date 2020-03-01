import React, { useContext } from 'react';
import FiltersContext from '../context/filters-context';
import PaginationContext from '../context/pagination-context';

export default () => { 

  const { filters, filtersDispatch } = useContext(FiltersContext);
  const { paginationDispatch } = useContext(PaginationContext)

  const handleTextChange = (e) => {
    filtersDispatch({
      type: 'SET_TEXT_FILTER',
      text: e.target.value
    })
  }

  const handleCompleteStatus = (e) => {
    const completed = e.target.value === "true" ? true : false
    filtersDispatch({
      type: 'SET_COMPLETED_STATUS',
      completed
    })
    paginationDispatch({
      type: 'SET_ONPAGE',
      onPage: 1
    })
  }

  const handleSort = (e) => {
    filtersDispatch({
      type: 'SET_SORTBY',
      sortBy: e.target.value
    })
  }

  return (

    <>
    <div className="task-filters">

      Sorted By: <select className="select-css" onChange={handleSort} defaultValue="dueDate">
      <option value="date_added_newest">Date Added (Newest Top)</option>
      <option value="date_added_oldest">Date Added (Oldest Top)</option>
      <option value="dueDate">Due Date (Soonest Top)</option>
      <option value="manual">Manual (Drag and Drop)</option>
      <option value="task_name">Task Name (Alphabetical)</option>
      
      </select>
        Showing <select className="select-css" onChange={handleCompleteStatus}>
          <option value={false}>Incomplete</option>
          <option value={true}>Completed</option>
      </select>
    </div>
    <div className="text-search">
      <input 
        placeholder="search"
        value={filters.text}
        onChange={handleTextChange}
        id="text-search-input"
      />
    </div>
    </>
  )


}