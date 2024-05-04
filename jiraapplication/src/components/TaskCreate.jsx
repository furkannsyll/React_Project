import React from 'react'

const TaskCreate = () => {
  return (
    <div className='form-wrapper'>
        <h3>Please Enter Task!</h3>
        <form className='task-form'>
            <label className='task-title'>Title</label>
            <input className='task-input' />
            <label className='task-title'>Enter Task</label>
            <textarea  className='task-input' rows={5}/>
            <button className='task-btn'>Create</button>
        </form>
    </div>
  )
}

export default TaskCreate