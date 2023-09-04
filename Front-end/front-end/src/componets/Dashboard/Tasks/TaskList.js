import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'; 
import PopupMessage from "../Tasks/PopupMessage"

function TaskList() {
  const user = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({});
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function
  useEffect(() => {
    
    openPopup();
  }, []);
  const openPopup = () => {
    setShowPopup(true);
  };
  const handleDelete = async (taskId) => {
    try {
      const response = await axios.delete(`/api/Auth/deleteTask/${user._id}/${taskId}`);

      if (response.status === 200) {
        console.log('Task deleted:', response);
        
        // Reload the page after task deletion
        window.location.reload();
      } else {
        console.error('Task deletion failed.');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = (task) => {
    setEditMode(true);
    setEditedTask(task);
    setEditedTaskId(task._id);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`/api/Auth/editTask/${user._id}/${editedTaskId}`, editedTask);

      if (response.status === 200) {
        console.log('Task updated:', response);
        
        // Reload the page after task update
        window.location.reload();
      } else {
        console.error('Task update failed.');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <>
    {showPopup && (
        <PopupMessage
          message="Reload the page if the task is not shown."
          onClose={() => setShowPopup(false)}
        />
      )}
      <div>
        {/* Use the navigate function to go to the DashboardAdmin route */}
        <button
        onClick={() => navigate('/DashboardAdmin')}
        style={{
          backgroundColor: 'blue', // Background color
          color: 'white', // Text color
          padding: '10px 20px', // Padding
          borderRadius: '5px', // Border radius
          border: 'none', // Remove border
          cursor: 'pointer', // Change cursor to pointer on hover
          position: 'absolute', // Position absolute
          top: '10px', // 10px from the top
          right: '10px', // 10px from the right
        }}
      >
        Navigate to add task
      </button>
      </div>
    <div className="usercount">
      {user && user.Tasks.map((el) => (
        <div className="task-card" key={el._id}>
          <h2 className="task-title">Task title</h2>
          {editMode && editedTaskId === el._id ? (
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
            />
          ) : (
            <p className="task-description">{el.title}</p>
          )}

          <h2 className="task-description">Task description</h2>
          {editMode && editedTaskId === el._id ? (
            <textarea
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            />
          ) : (
            <p className="task-description">{el.description}</p>
          )}

          <h2 className="task-due-date">Task due Date</h2>
          {editMode && editedTaskId === el._id ? (
            <input
              type="date"
              value={editedTask.dueDate}
              onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
            />
          ) : (
            <p className="task-due-date">{el.dueDate}</p>
          )}

          <h2 className="task-completed">Task completed</h2>
          {editMode && editedTaskId === el._id ? (
            <select
              value={editedTask.completed}
              onChange={(e) => setEditedTask({ ...editedTask, completed: e.target.value })}
            >
              <option value={true}>Completed</option>
              <option value={false}>Not Completed</option>
            </select>
          ) : (
            <p className="task-completed">{el.completed ? 'Completed' : 'Not Completed'}</p>
          )}
          <div className="action-buttons">
          {editMode && editedTaskId === el._id ? (
            <button className="edit-button" onClick={handleSave}>Save</button>
          ) : (
            <button className="edit-button" onClick={() => handleEdit(el)}>Edit Task</button>
          )}
          
          <button className="edit-button" onClick={() => handleDelete(el._id)}>Delete Task</button>
          <br />
          </div>
        </div>
        
      ))}
    </div>
    
    </>
  );
}

export default TaskList;
