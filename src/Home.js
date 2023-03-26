import React from "react";

const Home = ({ username, onUsernameChange, onStartQuiz }) => {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <form onSubmit={onStartQuiz}>
        <label>
          Enter your username:
          <input
            type="text"
            value={username}
            onChange={onUsernameChange}
          />
        </label>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default Home;
