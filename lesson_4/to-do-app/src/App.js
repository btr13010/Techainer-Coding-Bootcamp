import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Header from "./components/Header.js";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

function App() {
  const [listTasks, setListTasks] = useState([
    {
      id: 1,
      text: "Lam bai 1",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Lam bai 2",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Lam bai 3",
      time: "20/07/2022 19:30",
      reminder: false,
    },
    {
      id: 4,
      text: "Lam bai 4",
      time: "20/07/2022 19:30",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setListTasks([...listTasks, newTask]);
  }

  const deleteTask = (id) => {
    setListTasks(listTasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setListTasks(
      listTasks.map((task) => {
        if (task.id === id) {
          return {...task, reminder: !task.reminder}
        } else {
          return task
        }
      })
    );
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header title="To-do list"/>
        <Routes>
          <Route path='/' element={
            <>
              <AddTask onAdd={addTask}/>
              <Tasks tasks={listTasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              <Link to='/about'>About page</Link>
            </>
          }>
          </Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
