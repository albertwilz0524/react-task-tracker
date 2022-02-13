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
      currentIds.push(i.id);
    }

    let addId = 1;
    let addText = "";
    let addDay = "";

    while (currentIds.includes(addId)) {
      addId++;
    }
    while (addText === "" || addText === null) {
      addText = prompt("Enter the task: ");
    }
    while (addDay === "" || addDay === null) {
      addDay = prompt("Enter task deadline: ");
    }

    setTasks([
      ...tasks,
      { id: addId, text: addText, day: addDay, reminder: false },
    ]);
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
