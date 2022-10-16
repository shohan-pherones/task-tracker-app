import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-name">Task</label>
        <input
          required
          type="text"
          id="task-name"
          placeholder="Write your task name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date-time">Date & Time</label>
        <input
          required
          type="datetime-local"
          id="date-time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-checkbox">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          checked={reminder}
          type="checkbox"
          id="reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-submit" />
    </form>
  );
};

export default AddTask;
