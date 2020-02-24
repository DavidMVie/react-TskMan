import React, { useContext, useState } from 'react';
import moment from 'moment';
import uuid from 'uuid';

import TasksContext from '../../context/tasks-context';


export default (props) => {

  const { dispatch } = useContext(TasksContext);

  const [ openAddNoteBox , setOpenAddNoteBox ] = useState(false);

  const toggleAddNoteBox = () => {
    setOpenAddNoteBox(!openAddNoteBox)
  }

  const handleAddNote = (e) => {
    e.preventDefault();
    const text = e.target.elements.addNote.value;
    dispatch({
      type: 'ADD_NOTE',
      id: props.task.id,
      note: {
        id: uuid(),
        text,
        createdAt: moment().valueOf()
      }
    })
    
  }

  return (
    <div className={`notes-wrapper ${props.
      noteBoxOpen ? "open-note" : ""}`}>
      <ul>
        {props.task.notes.length > 0 && props.task.notes.map((note) => {
          return (
            <li  className="notes-list-item" key={note.id}>{note.text}</li>
          )
        })}
      </ul>

      <div className={`add-note-container ${openAddNoteBox ? "add-note-open" : ""}`}>
        <form onSubmit={handleAddNote}>
          <label onClick={toggleAddNoteBox}>Add Note</label>
          <textarea name="addNote"></textarea>
          <button className="btn-yell">Add</button>
        </form>
      </div>
    </div>
  )
}