import React from "react";

const Home = ({ username, onUsernameChange, onStartQuiz }) => {
  return (
    <div className="flex justify-center items-center h-screen" >
      <div className="border-8 border-double px-20 py-20 justify-center item-center">
        <button
          onClick={onStartQuiz}
          className="bg-green-600 font-extrabold hover:bg-green-300 tracking-widest text-white text-5xl py-2 px-4 my-2 mx-4 rounded-lg"
        >
          {" "}
          START THE QUIZ
        </button>
      </div>
    </div>
  );
};

export default Home;
