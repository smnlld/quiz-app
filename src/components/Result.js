import React from "react";
import Answers from "./Answers";

const Result = ({
  username,
  showResult,
  quizs,
  marks,
  startOver,
}) => {
  return (
    <div style={{ display: `${showResult ? "block" : "none"}` }}>
      <div>
        <h3>
          {username} score is {marks} out of {quizs.length}
        </h3>
        <Answers quizs={quizs} />
        <button onClick={startOver}>Start Over</button>
      </div>
    </div>
  );
};

export default Result;
