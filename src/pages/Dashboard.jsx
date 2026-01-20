import { useTasks } from "../context/TaskContext";

const Dashboard = () => {
  const { tasks } = useTasks();

  const ideaCount = tasks.filter(t => t.status === "ideas").length;
  const plannedCount = tasks.filter(t => t.status === "planned").length;
  const progressCount = tasks.filter(t => t.status === "progress").length;
  const doneCount = tasks.filter(t => t.status === "done").length;

  const labels = ["Ideas", "Planned", "Progress", "Done"];

  return (
    <div className="w-full">
      
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* ✅ STAT CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-300 p-4 rounded-xl shadow">
          <h3 className="text-sm font-medium">Ideas</h3>
          <p className="text-2xl sm:text-3xl font-bold">{ideaCount}</p>
        </div>

        <div className="bg-green-300 p-4 rounded-xl shadow">
          <h3 className="text-sm font-medium">Planned</h3>
          <p className="text-2xl sm:text-3xl font-bold">{plannedCount}</p>
        </div>

        <div className="bg-red-300 p-4 rounded-xl shadow">
          <h3 className="text-sm font-medium">Progress</h3>
          <p className="text-2xl sm:text-3xl font-bold">{progressCount}</p>
        </div>

        <div className="bg-yellow-300 p-4 rounded-xl shadow">
          <h3 className="text-sm font-medium">Done</h3>
          <p className="text-2xl sm:text-3xl font-bold">{doneCount}</p>
        </div>
      </div>

      {/* ✅ GRAPH SECTION */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full">
        <h2 className="text-base sm:text-lg font-semibold mb-4">
          Task Distribution
        </h2>

        {/* Scrollable on mobile */}
        <div className="overflow-x-auto">
          <div className="relative border-2 border-black rounded-lg h-64 min-w-[500px]">

            {/* Y Axis Numbers */}
            <div className="absolute left-2 top-4 bottom-10 flex flex-col justify-between text-sm text-gray-600">
              {[4, 3, 2, 1, 0].map((num) => (
                <span key={num}>{num}</span>
              ))}
            </div>

            {/* Y Axis Line */}
            <div className="absolute left-8 top-4 bottom-10 w-px bg-gray-500"></div>

            {/* X Axis Line */}
            <div className="absolute left-8 right-4 bottom-10 h-px bg-gray-500"></div>

            {/* X Axis Labels */}
            <div className="absolute left-8 right-4 bottom-2 flex justify-between text-sm text-gray-600 px-10">
              {labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
