import React from "react";

const Quiz = ({
  showQuiz,
  question,
  quizs,
  checkAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
}) => {
  return (
    <div style={{ display: `${showQuiz ? "block" : "none"}` }}>
      <div>
        <h2>{question?.question}</h2>
        <h3>
          {quizs.indexOf(question) + 1} / {quizs?.length}
        </h3>
      </div>
      <div>
        {question?.options?.map((item, index) => (
          <button key={index} onClick={(event) => checkAnswer(event, item)}>
            {item}
          </button>
        ))}
      </div>
      {
        //how to random arrangement of the question?
        // Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15){
        questionIndex + 1 !== quizs.length ? (
          <button onClick={nextQuestion} disabled={!selectedAnswer}>
            Next Question
          </button>
        ) : (
          <button onClick={showTheResult} disabled={!selectedAnswer}>
            Show Result
          </button>
        )
      }
    </div>
  );
};

export default Quiz;
