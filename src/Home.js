import React from "react";

const Home = ({ username, onUsernameChange, onStartQuiz }) => {
  return (
    <div>
      <button onClick={onStartQuiz}> START THE QUIZ</button>
    </div>
  );
};

export default Home;
