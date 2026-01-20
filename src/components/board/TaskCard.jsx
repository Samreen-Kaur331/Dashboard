import { useTasks } from "../../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="
        border 
        p-3 
        rounded-xl 
        bg-gray-50 
        flex 
        flex-col 
        sm:flex-row 
        sm:justify-between 
        sm:items-center 
        gap-2
        cursor-grab
        active:cursor-grabbing
        hover:shadow
        transition
      "
    >
      {/* Task Info */}
      <div>
        <p
          className={`font-medium ${
            task.status === "done"
              ? "line-through text-red-500"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </p>
        <p className="text-xs text-gray-500">{task.createdAt}</p>
      </div>

      {/* Delete button only in Done */}
      {task.status === "done" && (
        <button
          onClick={() => deleteTask(task.id)}
          className="
            bg-red-500 
            text-white 
            px-3 
            py-1 
            rounded-lg 
            text-sm
            hover:bg-red-600
            self-start 
            sm:self-auto
          "
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TaskCard;
