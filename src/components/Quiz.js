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
      <div className="flex flex-col relative justify-center items-center h-[500px]">
        <div className="border-8 border-double px-20 py-20 justify-center item-center">
          <div>{question?.question}</div>
          <div>
            {quizs.indexOf(question) + 1} / {quizs?.length}
          </div>

          {question?.options?.map((item, index) => (
            <button
              key={index}
              onClick={(event) => checkAnswer(event, item)}
              className="bg-blue-600 hover:bg-green-300 tracking-widest text-white text-xl py-2 px-2 my-1 mx-4 rounded-lg active:text-yellow-500"
            >
              {item}
            </button>
          ))}

          {
            //how to random arrangement of the question?
            // Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15){
            questionIndex + 1 !== quizs.length ? (
              <button
                onClick={nextQuestion}
                disabled={!selectedAnswer}
                className="bg-green-600 hover:bg-green-300 tracking-widest text-white text-xl py-2 px-2 my-1 mx-4 rounded-lg"
              >
                Next Question
              </button>
            ) : (
                // show result after finishing all the 5 indexes of questions
              <button onClick={showTheResult} disabled={!selectedAnswer}>
                Show Result
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Quiz;
