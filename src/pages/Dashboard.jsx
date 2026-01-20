import { useTasks } from "../context/TaskContext";

const Dashboard = () => {
  const { tasks } = useTasks();

  const ideaCount = tasks.filter(t => t.status === "ideas").length;
  const plannedCount = tasks.filter(t => t.status === "planned").length;
  const progressCount = tasks.filter(t => t.status === "progress").length;
  const doneCount = tasks.filter(t => t.status === "done").length;

  const labels = ["Ideas", "Planned", "Progress", "Done"];

  return (
    <div className="w-full space-y-6">
      
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
        Dashboard
      </h1>

      {/* 🔹 STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Ideas" count={ideaCount} color="bg-blue-300" />
        <StatCard title="Planned" count={plannedCount} color="bg-green-300" />
        <StatCard title="Progress" count={progressCount} color="bg-red-300" />
        <StatCard title="Done" count={doneCount} color="bg-yellow-300" />
      </div>

      {/* 🔹 GRAPH SECTION */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold mb-4">
          Task Distribution
        </h2>

        {/* Scroll only on small screens */}
        <div className="overflow-x-auto">
          <div className="relative border-2 border-black rounded-lg h-56 sm:h-64 min-w-[420px] sm:min-w-full">

            {/* Y Axis */}
            <div className="absolute left-2 top-4 bottom-10 flex flex-col justify-between text-xs sm:text-sm text-gray-600">
              {[4, 3, 2, 1, 0].map(num => (
                <span key={num}>{num}</span>
              ))}
            </div>

            {/* Axis lines */}
            <div className="absolute left-8 top-4 bottom-10 w-px bg-gray-500" />
            <div className="absolute left-8 right-4 bottom-10 h-px bg-gray-500" />

            {/* X Axis labels */}
            <div className="absolute left-8 right-4 bottom-2 flex justify-between text-xs sm:text-sm text-gray-600 px-4 sm:px-10">
              {labels.map(label => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

/* 🔹 Reusable Card */
const StatCard = ({ title, count, color }) => (
  <div className={`${color} p-4 rounded-xl shadow`}>
    <h3 className="text-sm font-medium">{title}</h3>
    <p className="text-2xl sm:text-3xl font-bold">{count}</p>
  </div>
);

export default Dashboard;
