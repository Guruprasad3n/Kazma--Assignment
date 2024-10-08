// import React, { useEffect, useState } from "react";
// import TaskList from "./components/TaskList";
// import AddTaskForm from "./components/AddTaskForm";
// import axios from "axios";

// const App: React.FC = () => {
//   const [tasks, setTasks] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const { data } = await axios.get("/api/tasks/fetchAllTasks");
//       setTasks(data.tasks);
//     };
//     fetchTasks();
//   }, []);

//   const handleAddTask = async (task: string) => {
//     await axios.post("/api/tasks/add", { task });
//     setTasks((prev) => [...prev, task]);
//   };

//   return (
//    <div className="min-h-screen flex items-center justify-center bg-gray-100">
//    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
//      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Todo List</h1>
//      <AddTaskForm onAddTask={handleAddTask} />
//      <TaskList tasks={tasks} />
//    </div>
//  </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import axios from "axios";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("/api/tasks/fetchAllTasks");
      setTasks(data.tasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (task: string) => {
    await axios.post("/api/tasks/add", { task });
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white p-5">
      <h1 className="text-4xl font-bold mb-5">Todo List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App: React.FC = () => {
//    const [tasks, setTasks] = useState<string[]>([]);

//    useEffect(() => {
//       axios.get('http://localhost:3000/fetchAllTasks')
//          .then(res => setTasks(res.data.tasks))
//          .catch(err => console.error(err));
//    }, []);

//    return (
//       <div className="container mx-auto p-4">
//          <h1 className="text-2xl font-bold">TODO List</h1>
//          <ul>
//             {tasks.map((task, index) => (
//                <li key={index} className="border p-2 my-2">
//                   {task}
//                </li>
//             ))}
//          </ul>
//       </div>
//    );
// }

// export default App;
