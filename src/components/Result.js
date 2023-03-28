import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Answers from "./Answers";

const Result = ({ username, showResult, quizs, marks, startOver }) => {
  const [showChart, setShowChart] = useState(false);

  const handleShowChart = () => {
    setShowChart(true);
  };

  const handleHideChart = () => {
    setShowChart(false);
  };

  return (
    <div style={{ display: `${showResult ? "block" : "none"}` }}>
      <div className="flex flex-col relative items-center justify-center my-20 h-[100px]">
        <div className=" bg-[#898121] border-8 border-double px-20 py-20 justify-center item-center">
          <div className="text-white text-lg">
            <strong className="text-2xl">{username}</strong> your score is{" "}
            {marks} out of {quizs.length}
          </div>
          <div>
            <button
              className="bg-green-600 hover:bg-green-300 tracking-widest w-full text-white font-bold py-2 px-4 my-2  rounded-lg"
              onClick={startOver}
            >
              Start Over
            </button>
          </div>
        </div>
      </div>


      <div>
      {showChart && (
        <div className="flex flex-col relative justify-center items-center h-[500px]">
          <div className=" border-8 border-double px-20 py-20 justify-center item-center">
            <BarChart
              width={600}      
              height={400}
              data={quizs}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={quizs.question} />
              <YAxis dataKey={quizs.answer} />
              <Tooltip />
              <Legend />
              <Bar dataKey={marks} fill="#82ca9d" />
            </BarChart>
            <button
              className="bg-red-600 hover:bg-red-300 tracking-widest w-full text-white font-bold py-2 px-4 my-2  rounded-lg"
              onClick={handleHideChart}
            >
              Hide Chart
            </button>
          </div>
        </div>

      )}
      {!showChart && (
        <div className="flex flex-col relative justify-center items-center h-[500px]">
          <div className=" bg-[#898121] border-8 border-double px-20 py-20 justify-center item-center">
            <Answers quizs={quizs} />
            <button
              className="bg-green-600 hover:bg-green-300 tracking-widest w-full text-white font-bold py-2 px-4 my-2  rounded-lg"
              onClick={handleShowChart}
            >
              View Results Chart
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Result;
