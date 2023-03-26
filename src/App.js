import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./App1";
import Home from "./Home";

export const App = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStartQuiz = (event) => {
    event.preventDefault();
    if (username !== "") {
      window.location.href = "/quiz";
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            username={username}
            onUsernameChange={handleUsernameChange}
            onStartQuiz={handleStartQuiz}
          />
        </Route>
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
};

export default App;
