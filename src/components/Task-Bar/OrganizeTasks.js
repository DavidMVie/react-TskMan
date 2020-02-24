import React from 'react';

export default () => {

  return (
    <div id="taskOrganiserContent">
      <h1>Task Organiser</h1>
      <div>
        <label htmlFor="tasksPerPage">Task Per Page</label>
        <input type="number" id="tasksPerPage" />
      </div>
      <div>
        <label htmlFor="sortTasks">Sort Task Display </label>
        <select id="sortTasks">
          <option value="custom_Desc">Manually Sort (drag and drop)</option>
          <option value="createdAt_Desc">By Date Added (Newest Top)</option>
          <option value="createdAt_Asc">By Date Added (Oldest Top)</option>
          <option value="dueDate_Asc">By Due Date (Soonest Top)</option>
          <option value="description_Asc">Task Name (Alphabetical)</option>
        </select>
      </div>
    </div>
 
 
  )
}