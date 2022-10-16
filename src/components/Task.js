import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3 className="task-title">
        {task.text}{" "}
        <FaTimes
          style={{ color: "crimson", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p className="task-day">{task.day}</p>
    </div>
  );
};

export default Task;
