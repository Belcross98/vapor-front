import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/MangaApi";
import { globalContext } from "../context/context";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsLoggedIn } = useContext(globalContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, errorText, data } = await registerUser(
      email,
      username,
      password
    );
    if (success) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setErrorMessage(errorText);
    }
  };

  return (
    <>
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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

export default Register;
