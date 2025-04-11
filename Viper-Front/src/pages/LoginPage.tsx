import { FormEvent, useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { logIn } from "../services/MangaApi";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const error = await logIn({ username, password });

      if (error) {
        setErrorMessage(error);
      } else {
        navigator("/");
      }
    } catch (error: any) {
      setErrorMessage("Invalid Username/Password");
    }
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
