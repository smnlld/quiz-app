import React from "react";
import Answers from "./Answers";

const Result = ({ username, showResult, quizs, marks, startOver }) => {
  return (
    <div style={{ display: `${showResult ? "block" : "none"}` }}>
      <div className="flex flex-col relative items-center justify-center my-20 h-[100px]">
        <div className="border-8 border-double px-20 py-20 justify-center item-center">
          {username} score is {marks} out of {quizs.length}
          <div>
            <button 
            className="bg-green-600 hover:bg-green-300 tracking-widest w-full text-white font-bold py-2 px-4 my-2  rounded-lg"
            onClick={startOver}>Start Over</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative justify-center items-center h-[500px]">
      <div className="border-8 border-double px-20 py-20 justify-center item-center">
        <Answers quizs={quizs} />
      </div>
      </div>
    </div>
  );
};

export default Result;
