import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task 1", day: "monday", reminder: false },
    { id: 2, text: "task 2", day: "tuesday", reminder: false },
    { id: 3, text: "task 3", day: "wednesday", reminder: false },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ backgroundColor: "grey", padding: 20 }}>
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
