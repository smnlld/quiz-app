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
            <strong> QUIZ APP</strong>
            <p>by: Simon Ullado</p>
          </div>
      <Switch>
        <Route exact path="/">
          
          <Home 
            onStartQuiz={handleStartQuiz}
          />
        </Route>
        <Route  path="/quiz"
        render={() => <Quiz />}/>
      </Switch>
    </Router>
  );
};

export default App;
