import React from "react";
import Board from "../components/board/Board.jsx";

const BoardPage = () => {
  return (
    <section className="w-full">
      
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Board
        </h2>
        <p className="text-sm text-gray-500">
          Manage tasks across different stages
        </p>
      </div>

      {/* Board */}
      <div className="overflow-x-auto">
        <Board />
      </div>
    </section>
  );
};

export default BoardPage;
