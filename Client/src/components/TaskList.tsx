import React from 'react';

interface TaskListProps {
  tasks: string[] | undefined;
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden mt-5">
      {!tasks || tasks.length === 0 ? (
        <li className="p-4 text-center text-gray-500">No tasks available.</li>
      ) : (
        tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-4 border-b border-gray-300">
            <span className="text-gray-800">{task}</span>
            <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200">Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;

