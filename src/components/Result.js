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
  const data = quizs.map((quiz, index ) => {
    return {
      name: `Question ${index + 1}`,
      value: quiz.correct ? 1 : 0,
      // fill: correctAnswers && selectedAnswer ? "#4CAF50" : "#F44336"
    };
  });

  // function to return color based on value
  // const fillFunc = (value) => {
  //   return value === 1 ? "#4CAF50]" : "#F44336";
  // };

  return (
    <div style={{ display: `${showResult ? "block" : "none"}` }}>
      <div>
        <div className="flex flex-col relative items-center justify-center my-20 h-[100px]">
          <div className=" bg-[#898121] border-8 border-double px-20 py-20 justify-center item-center">
            <div className="text-white text-lg">
              <strong className="text-2xl">{username}</strong> your score is{" "}
              <strong> {marks} out of {quizs.length}</strong>
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

        <div className="py-5">
          {!showChart && (
            <div className="flex flex-col relative justify-center items-center h-[500px]">
              <div className=" bg-[#898121] border-8 border-double px-20 py-20 justify-center item-center">
                <Answers quizs={quizs} />
                <button
                  className="bg-green-600 hover:bg-green-300 tracking-widest w-full text-white font-bold py-2 px-4 my-2  rounded-lg"
                  onClick={handleShowChart}
                >
                  OPEN CHART RESULT
                </button>
              </div>
            </div>
          )}
          <div className="py-10">
            {showChart && (
              <div className="flex flex-col relative justify-center items-center h-[500px]">
                <div className="bg-[#898121] border-8 border-double px-20 py-20 justify-center item-center">
                  <BarChart
                  className="bg-white"
                    width={600}
                    height={400}
                    data={data}
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="fill" className="bg-red-100" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
