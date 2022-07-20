import { useState } from 'react';

function AddTask(props) {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(true);
  
  // Handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd('abc');
    if (!text) {
      alert("Please enter a text")
      return
    }
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Time</label>
        <input 
          type='text'
          placeholder='Deadline'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input 
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type='submit' value='Add Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask