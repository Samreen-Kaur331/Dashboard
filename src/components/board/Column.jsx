import React from "react";
import TaskCard from "./TaskCard.jsx";
import { useTasks } from "../../context/TaskContext";

const Column = ({ title, status }) => {
  const { tasks, moveTask } = useTasks();

  const onDrop = (e) => {
    e.preventDefault();
    const taskId = Number(e.dataTransfer.getData("taskId"));
    moveTask(taskId, status);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className="
        bg-white 
        p-4 
        rounded-xl 
        shadow 
        min-h-[250px]
        flex 
        flex-col
      "
    >
      {/* Column Title */}
      <h3 className="font-semibold mb-3 text-center sm:text-left">
        {title}
      </h3>

      {/* Tasks */}
      <div
        className="
          flex 
          flex-col 
          gap-2 
          overflow-y-auto
          max-h-[60vh]
        "
      >
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Column;

