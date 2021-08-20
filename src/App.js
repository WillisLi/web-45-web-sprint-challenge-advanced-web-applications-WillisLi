import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {

  const logout = (event) => {
      axiosWithAuth()
        .post('/logout')
        .then(response => {
          localStorage.removeItem("token")
          window.location.href = "/login"
        })
        .catch(error => {
          console.log(error);
        })
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick = {logout} href="#">logout</a>
        </header>
        <PrivateRoute path = "/protected" component = {BubblePage}/>
        <Route exact path = "/" component = {Login} />
        <Route path = "/login" component = {Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.