import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {

  const Logout = (event) => {
    axiosWithAuth()
      .post('/logout')
      .then(response => {
        console.log(response)
        localStorage.removeItem("token")
        window.location.href = "/login"
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <Router>
      <div className = "bubblesApp">
        <header>
          Color Picker Sprint Challenge
          <Link to = "/login">Login</Link>
          {localStorage.getItem("token") && 
              <div>
                <Link to="/protected">Friends</Link>
              </div>
          }
          {/* <button data-testid="logoutButton" onClick={Logout}>Button</button> */}
          <Link data-testid="logoutButton" onClick={Logout}>Logout</Link>
          {/* a href link button */}
          {/* <a data-testid="logoutButton" onClick = {logout} href="#">logout</a> */} 
        </header>
        <Switch>
          <PrivateRoute path = "/protected" component = {BubblePage}/>
          <Route exact path = "/" component = {Login} />
          <Route path = "/login" component = {Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.