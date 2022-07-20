import './App.css';
import Header from "./components/Header.js";
import Tasks from './components/Tasks';

function App() {
  const listTasks = [
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
      reminder: true,
    },
    {
      id: 4,
      text: "Lam bai 4",
      time: "20/07/2022 19:30",
      reminder: true,
    }
  ]

  return (
    <div className="container">
      <Header title="To-do list"/>
      <Tasks tasks={listTasks}/>
    </div>
  );
}

export default App;
