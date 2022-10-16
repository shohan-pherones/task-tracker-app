import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Web development class",
      day: new Date(2022, 9, 16, 10),
      reminder: false,
    },
    {
      id: 2,
      text: "Job preparation class",
      day: new Date(2022, 9, 16, 12),
      reminder: false,
    },
    {
      id: 3,
      text: "React.js drone project",
      day: new Date(2022, 9, 17, 10, 30),
      reminder: false,
    },
  ]);

  // Add task
  const addTask = ({ day, ...others }) => {
    const newDay = new Date(day);
    const id = Math.round(Math.random() * 10000);
    const newTask = { day: newDay, id, ...others };
    setTasks([newTask, ...tasks]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 && (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
      {tasks.length === 0 && <p className="tasks-fallback">No tasks!</p>}
    </div>
  );
};

export default App;
