import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task 1", day: "monday", reminder: false },
    { id: 2, text: "task 2", day: "tuesday", reminder: false },
    { id: 3, text: "task 3", day: "wednesday", reminder: false },
  ]);

  const handleAdd = () => {
    let currentIds = [];

    for (let i of tasks) {
      currentIds.push(i.id + "");
    }

    let addId = "";

    while (currentIds.includes(addId) || addId === "") {
      addId = prompt("Enter task ID: ");
    }

    let addText = prompt("Enter the task: ");
    let addDay = prompt("Enter task deadline: ");

    tasks.push({
      id: addId,
      text: addText,
      day: addDay,
      reminder: false,
    });

    setTasks(tasks.filter((task) => true));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ backgroundColor: "grey", padding: 20 }}>
      <Header title="Task Tracker" onAdd={handleAdd} />
      <Tasks tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
