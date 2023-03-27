import React from 'react';

const Start = ({ showStart, username, onUsernameChange, onStartQuiz }) => {
    return (
        <div style={{ display: `${showStart ? 'block' : 'none'}`}}>
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

export default Start;
