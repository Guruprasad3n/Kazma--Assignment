// import React, { useState } from 'react';

// interface AddTaskFormProps {
//   onAddTask: (task: string) => void;
// }

// const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
//   const [task, setTask] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (task) {
//       onAddTask(task);
//       setTask('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add new task"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTaskForm;

import React, { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (task: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-5">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
