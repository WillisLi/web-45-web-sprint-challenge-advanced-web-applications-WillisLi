import React, { useState } from "react";
import axios from "axios";

const initialState = {
    username: "Lambda",
    password: "School",
}

const errorState = {
    error: ""
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ credentials, setCredentials ] = useState(initialState);
  const [ error, setError ] = useState(errorState);

  const changeHandler = (event) => {
      setCredentials({
          ...credentials,
          [event.target.name]: event.target.value, 
      })
  }

  const login = (event) => {
    event.preventDefault();

    axios.
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit = {login}>
          <label>Username:
            <input
              id = "username"
              name = "username"
              value = {credentials.username}
              type = "text"
              onChange = {changeHandler}
            />
          </label>

          <label>Password:
              <input 
                id = "password"
                name = "password"
                value = {credentials.password}
                type = "password"
                onChange = {changeHandler}
              />
          </label>

          <button id = "submit">Submit</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"