import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage.js";
import LoginPage from "./components/views/LoginPage/LoginPage.js";
import RegisterPage from "./components/views/RegisterPage/RegisterPage.js";


function App() {
  return (
      <Router>
          <div>
              <Switch>
                  {/* route can be written in two ways */}
                  <Route exact path="/" component={LandingPage}/>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Route exact path="/register">
                      <RegisterPage />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App