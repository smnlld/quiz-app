import React from "react";

const Start = ({ showStart, username, onUsernameChange, onStartQuiz }) => {
  return (
    <div style={{ display: `${showStart ? "block" : "none"}` }}>
      <div className="flex flex-col relative justify-center items-center h-[500px]">
        <div className="bg-[#898121] border-8 border-double px-20 py-20 justify-center item-center">
          <form onSubmit={onStartQuiz}>
            <label className="mx-4 text-[#F7F1E5]  font-sans text-2xl font-bold">
              Enter your Full Name:
              <input
                type="text"
                value={username}
                onChange={onUsernameChange}
                className="rounded w-80 text-left px-2 ml-16 font-mono tracking-widest text-gray-500 bg-white"
              />
            </label>
            <div>
              <button
                className="bg-[#7AA874] hover:bg-green-300 tracking-widest w-full text-white text-2xl font-bold py-2 px-4 my-2  rounded-lg"
                type="submit"
              >
                Start Quiz
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Start;
