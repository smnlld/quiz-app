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
      <div>
        <div className="flex flex-col relative items-center justify-center my-20 h-[100px]">
          <div className="text-8xl">
            <strong> QUIZ APP</strong>
          </div>
          <div className="text-2xl">
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
    </Router>
  );
};

export default App;
