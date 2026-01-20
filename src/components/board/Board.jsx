import React, { useState } from "react";
import Column from "./Column.jsx";
import { useTasks } from "../../context/TaskContext";

const Board = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      status: "ideas",
      createdAt: new Date().toLocaleDateString(),
    });

    setTitle("");
  };

  return (
    <div className="p-4">
      {/* Add Task */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded-xl w-full sm:w-64"
        />
        <button
          onClick={handleAddTask}
          className="bg-black text-white px-4 py-2 rounded-xl w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      {/* Columns */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-4 
        rounded-lg 
        shadow-md
      ">
        <Column title="Ideas" status="ideas" />
        <Column title="Planned" status="planned" />
        <Column title="Progress" status="progress" />
        <Column title="Done" status="done" />
      </div>
    </div>
  );
};

export default Board;
