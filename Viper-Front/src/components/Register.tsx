import { FormEvent, useState } from "react";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:5030/Account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/");
          return response.statusText;
        } else
          return response.json().then((data) => {
            let errorList: string[];
            if (data.errors) {
              errorList = Object.values(data.errors).flat() as string[];
            } else {
              errorList = data.map((item: any) => item.description);
            }

            let error: string = errorList.pop()!;
            throw new Error(error);
          });
      })

      .catch((error) => {
        setErrorMessage(error.message);
      });
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
