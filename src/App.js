import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();

    return data;
  };

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
      <Header onAdd={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 && (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
      {tasks.length === 0 && <p className="tasks-fallback">No tasks!</p>}
    </div>
  );
};

export default App;
