import React from "react";

const Answer = ({ quizs }) => {
  return (
    <div>
      <div className="flex justify-center mb-5">
      <strong className="text-4xl text-white"> Correct Answer</strong>
      </div>
    <ul className="text-white">
      {quizs.map((quizs, index) => (
        <li key={quizs.questions}>
          <div className="text-xl font-bold"> Question {index + 1} </div>
          <p className="text-lg"> {quizs.question} </p>
          <p className="text-green-300 text-xl">
            {" "}
            <strong>Correct Answer:</strong>  {quizs.answer}{" "}
          </p>
        </li>
      ))}
    </ul>
    </div>
  );
};
export default Answer;
