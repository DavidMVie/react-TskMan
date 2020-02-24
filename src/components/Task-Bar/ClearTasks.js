import React, {useContext} from 'react';

import TasksContext from '../../context/tasks-context';

export default () => {

  const { dispatch }  = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.wipeout.value;
    if (value.toLowerCase().trim() === 'wipeout') {
      dispatch({
        type: 'WIPE_OUT'
      })
    }
  }

  return (
    <div>
      <h2>Delete All Tasks!</h2>
      <p> To confirm that you want to remove <strong>all</strong> your tasks please type the word <strong><i>"wipeout"</i></strong> in the box below</p>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        id="wipeout" 
        name="wipeout"         
        />
        <button 
          className="delete-all btn-yell"
        >Delete</button>
      </form>

    </div>
  )

}