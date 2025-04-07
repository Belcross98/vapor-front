import { FormEvent, useEffect, useState } from "react";
import Navbar from "./NavBar";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:5030/Account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: username,
        Password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigator("/");
          return response.json();
        } else {
          return response.json().then((data) => {
            console.log(data);
            const errorList: string[] = Object.values(
              data.errors
            ).flat() as string[];
            const error = errorList.pop();
            throw new Error(error);
          });
        }
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Handle input changes
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle input changes
            />
          </div>

          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </>
  );
}

export default LoginPage;
