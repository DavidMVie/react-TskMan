import React, { useState, useContext, useEffect } from 'react';

import moment from 'moment';
import ContentEditable from 'react-contenteditable';
import TasksContext from '../../context/tasks-context';
import NotesSection from './NotesSection';


export default (props) => {
  const {tasks, dispatch } = useContext(TasksContext);  
  const contentEditable = React.createRef();

  const [editedDescription, setEditedDescription] = useState({html: props.task.description})
  const [ editDueDate, setEditDueDate ] = useState(false)
  const [noteBoxOpen, setNoteBoxOpen] = useState(false)



  const handleChange = e => setEditedDescription({html: e.target.value})

  const handleRemoveItem = () => {
    dispatch({type: 'REMOVE_TASK', id: props.task.id})
  }

  const handleMarkComplete = (e) => {
    const target = document.querySelector(`[data-id="${props.task.id}"]`)
    if(e.target.checked) {
      target.classList.add('task-completed')
      dispatch({
        type: 'MARK_COMPLETE',
        id: props.task.id
      })
    }else if(!e.target.checked) {
      target.classList.remove('task-completed');
      dispatch({
        type: 'MARK_INCOMPLETE',
        id: props.task.id
      })
    }  
      // Dispatch action to updated completed at status with a new moment timestamp
      // apply a styling to reflect a list item that's been marked as complete.
  }

  const handleChangeDueDate = (e) => {
    const value = e.target.previousElementSibling.value;
    console.log(value);
    if(value) {
      dispatch({
        type: 'CHANGE_DUE_DATE',
        id: props.task.id,
        dueDate: moment(value).valueOf()
      })

      setEditDueDate(false)
    }
  }

  const showChangeDueDateCalendar = (e) => {
    e.preventDefault();
    setEditDueDate(true)
  }

  const toggleNoteBox = () => {
    setNoteBoxOpen(!noteBoxOpen)
  }


  return (
    <li className={`task-list-item ${props.task.completed ? "task-completed" : ''}`} data-id={props.task.id}>
      <div className="task-wrapper">
        <div className="task-col-1">
          <label htmlFor="mark-complete">
            <input 
              type="checkbox"
              id="mark-complete"
              title="Mark Complete"
              onChange={handleMarkComplete}
              checked={props.task.completed ? true : false}
            />
          </label>
          <i className="fas fa-sticky-note" onClick={toggleNoteBox}></i>
        </div>
        <div className="task-col-2">
          <ContentEditable 
            innerRef={contentEditable}
            html={editedDescription.html}
            disabled={false}
            onChange={handleChange}
          />
          <div className="task-lower-half">          
            {editDueDate ?  
              <span className="edit-date-wrapper">
                <input type="date"/>
                <i className="fas fa-check" onClick={handleChangeDueDate}></i> | <i className="fas fa-times" onClick={() => setEditDueDate(false)}></i>
              </span> 
            : 
              <p>{props.task.dueDate ? 'Due '+ moment(props.task.dueDate).format('MMMM Do YYYY') : 'No due date set  '}
              <a href="#" className="change-due-date-link" onClick={showChangeDueDateCalendar}>  ..(Change)</a></p>}
          </div>
        </div>
        <div className="task-col-3">
          <i className="fas fa-trash-alt"
            onClick={handleRemoveItem}
          ></i>  
        </div>
      </div>
      <NotesSection task={props.task} noteBoxOpen={noteBoxOpen} />
    </li>
  )
}