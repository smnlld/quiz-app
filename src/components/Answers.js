import React from "react";

const Answer = ({ quizs }) => {
  return (
    <ul>
      {quizs.map((quizs, index) => (
        <li key={quizs.questions}>
          <h3> Question {index + 1}; </h3>
          <p> {quizs.question} </p>
          <p>
            {" "}
            <strong>Correct Answer: </strong> {quizs.answer}{" "}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default Answer;
