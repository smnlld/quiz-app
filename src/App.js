import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./CompilerQuiz";
import Home from "./Home";

export const App = () => {
  // const [username, setUsername] = useState("");
  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  const handleStartQuiz = (event) => {
    event.preventDefault();
    window.location.href = "/quiz";
  };

  return (
    <Router>
      <div className="h-screen bg-[#F7F1E5] overflow-auto">
        <div>
          <div className=" bg-[#E7B10A] flex flex-col relative items-center py-20 text-[#4C4B16] justify-center my-20 h-[100px]">
            <div className="text-8xl font-mono">
              <strong> QUIZ APP</strong>
            </div>
            <div className="text-2xl font-mono">
              <p>by: Simon Ullado</p>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home onStartQuiz={handleStartQuiz} />
          </Route>
          <Route path="/quiz" render={() => <Quiz />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
