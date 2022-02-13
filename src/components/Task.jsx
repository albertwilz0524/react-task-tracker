import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  return (
    <div style={{ backgroundColor: "lavenderblush", margin: 5, padding: 5 }}>
      <h3>{props.task.text}</h3>
      <FaTimes
        onClick={props.onDelete}
        style={{ color: "red", cursor: "pointer" }}
      />
      <p>Deadline: {props.task.day}</p>
    </div>
  );
};

export default Task;
