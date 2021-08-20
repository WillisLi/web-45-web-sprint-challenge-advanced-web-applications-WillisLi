import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const initialState = {
    username: "Lambda",
    password: "School",
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ credentials, setCredentials ] = useState(initialState);
  const [ error, setError ] = useState("");

  const { push } = useHistory();

  const changeHandler = (event) => {
      setCredentials({
          ...credentials,
          [event.target.name]: event.target.value, 
      })
  }

  const login = (event) => {
    event.preventDefault();

    if (credentials.username === "" || credentials.password === "") {
      setError("Username or Password not valid.")
    } else {
      axios.post("http://localhost:5000/api/login", credentials)
        .then(response => {
          localStorage.setItem('token', response.data.payload);
          push('/protected')
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
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