import React, { useState, useContext } from 'react';
import moment from 'moment';
import uuid from 'uuid';
import TasksContext from '../../context/tasks-context';

export default () => {

  const { dispatch } = useContext(TasksContext)

  const [ description, setDescription ] = useState('');
  const [ dueDate, setDueDate ] = useState('');
  const [ noteText, setNoteText ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TASK', task: {
      id: uuid(),
      createdAt: moment().valueOf(),
      description,
      dueDate: moment(dueDate).valueOf(),
      notes: noteText ? [{
        id: uuid(),
        text: noteText,
        createdAt: moment().valueOf()
      }] : [], // either a note, or default empty []
      completed: false,
      completedDate: null
    }})
  }

  return (
    <form
     className="add-task-form"
     onSubmit={onSubmit}>
      <h2> Add New Task </h2>
      <div>
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          id="description" 
          name="description" 
          required={true} 
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date" 
          id="dueDate" 
          name="dueDate"
          value={dueDate}
          onChange={(e) => {
            setDueDate(e.target.value)
          }} />
      </div>
      <div>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={noteText}
          onChange={(e) => {
            setNoteText(e.target.value)
          }}></textarea>
      </div>
      <div>
        <button className="btn-yell">Add Task</button>
      </div>
    </form>
  )
}