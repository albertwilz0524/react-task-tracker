import Task from "./Task";

const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => props.onDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default Tasks;
