import React, { useEffect, useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const CompilerQuiz = (props) => {
  //this one will handle all the state regarding the quiz
  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);
  const [username, setUsername] = useState("");


  //to close and open parts of the quiz
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStartQuiz = (event) => {
    event.preventDefault();
    if (username !== "") {
      const startQuiz = () => {
        setShowStart(false);
        setShowQuiz(true);
      };
      startQuiz();
    }
  };

  //fetcher of the data from Quiz.json
  useEffect(() => {
    fetch("quiz.json")
      .then((res) => res.json())
      .then((data) => {
        // shuffle the questions array
        const shuffledQuestions = shuffle(data);
        const splicedShuffledQuestion = shuffledQuestions.splice(0, 5);
        setQuizs(splicedShuffledQuestion);
      });
  }, []);
  //Try to shuffle the question from json to array (fisher-yate algo)
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  //pick 1 question from the shuffled 
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  //this will get the score of the user if its correct will plus  1 in mark
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (selected === question.answer) {
        setMarks(marks + 1);
      } 
    }
  };

  // Next Quesion
  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(questionIndex + 1);
  };

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
  };

  return (
    <>
      <Start
        showStart={showStart}
        username={username}
        onUsernameChange={handleUsernameChange}
        onStartQuiz={handleStartQuiz}
      />
      <Quiz
        showQuiz={showQuiz}
        question={question}
        quizs={quizs}
        checkAnswer={checkAnswer}
        correctAnswer={correctAnswer}
        selectedAnswer={selectedAnswer}
        questionIndex={questionIndex}
        nextQuestion={nextQuestion}
        showTheResult={showTheResult}
      />
      <Result
        username={username}
        showResult={showResult}
        quizs={quizs}
        marks={marks}
        startOver={startOver}
      />
    </>
  );
};

export default CompilerQuiz;
 