import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


function AddTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const user = useSelector((state) => state.user);
  console.log(user, "hhh");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleCompletedChange = (e) => {
    setCompleted(e.target.checked);
  };
  
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newTask = {
      title,
      description,
      dueDate,
      completed,
    };

    try {
      const response = await axios.put(`/api/Auth/addTask/${user._id}`, newTask);

      console.log('Task added:', response);
    } catch (error) {
      console.error('Error adding task:', error);
    }
    navigate("/listTask");
  };

  return (
    <div className="add-task-form">
      <h2>Add Task</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={handleDueDateChange} />
      </div>
      <div>
        <label>
          Completed:
          <input type="checkbox" checked={completed} onChange={handleCompletedChange} />
        </label>
      </div>

      <button type="button" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}

export default AddTaskForm;
