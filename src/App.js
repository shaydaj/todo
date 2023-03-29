import './App.css';

import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo.jsx';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [todo, setToDo] = useState([
    {"id": 1, "title":"Task 1", "status": false},
    {"id": 2, "title":"Task 2", "status": false},
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    let newTasks = todo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  const markDone = (id) => {
    const newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  const cancelUpdate = (e) => {
    setUpdateData('');
  }

  const changeTask = () => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br /><br />

      {updateTask && updateData ? (
        <UpdateForm
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}/>
      )}

      {toDo && toDo.length ? '' : 'No Tasks...'}
      <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
