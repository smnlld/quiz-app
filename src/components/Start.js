import React from 'react';

const Start = ({ showStart, username, onUsernameChange, onStartQuiz }) => {
    return (
        <div style={{ display: `${showStart ? 'block' : 'none'}`}}>
          <div className="flex justify-center items-center h-screen">
        <div className='border-8 border-double px-20 py-20 justify-center item-center'>
        <form onSubmit={onStartQuiz}>
        <label className='mx-4 font-sans text-lg font-bold'>
          Enter your username:
          <input
            type="text"
            value={username}
            onChange={onUsernameChange}
            className="rounded w-50 text-center mx-16 font-bold tracking-widest text-black bg-gray-300"
          />
        </label>
        <div>
        <button className='bg-green-600 hover:bg-green-300 tracking-widest w-full text-white font-bold py-2 px-4 my-2  rounded-lg' type="submit">Start Quiz</button>
        </div>
        </form>
        </div>
        </div>
        </div>
    );
};

export default Start;
