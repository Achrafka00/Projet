import { useState } from "react";
import axios from "axios";

import Header from "./components/header";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passR, setPassR] = useState("");

  const [emailerr, setemailerr] = useState();

  const [accept, setAccept] = useState(false);
  // const [flag, setFlag] = useState(false);

  async function Submit(e) {
    let flag = true;

    e.preventDefault();
    setAccept(true);

    if (name === "" || pass.length < 8 || passR !== pass) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        const res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: pass,
          password_confirmation: passR,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setemailerr(err.response.status);
    }
  }

  return (
    <div>
      <Header />
      <div className="Parent">
        <div className="Register">
          <form onSubmit={Submit}>
            <label htmlFor="Name"> Name : </label>
            <input
              id="Name"
              type="text"
              placeholder="Enter Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name === "" && accept && (
              <p className="error">Username is Required</p>
            )}
            <label htmlFor="Email"> Email : </label>
            <input
              id="Email"
              type="email"
              placeholder="Enter Your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {accept && emailerr === 422 && (
              <p className="error">email already taken</p>
            )}
            <label htmlFor="Password"> Password : </label>
            <input
              id="Password"
              type="password"
              placeholder="Enter Your Password..."
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            {pass.length < 8 && accept && (
              <p className="error">Password must be more than 8 char</p>
            )}
            <label htmlFor="RPassword"> Repeat Password : </label>
            <input
              id="RPassword"
              type="password"
              placeholder="Repeat Your Password..."
              value={passR}
              onChange={(e) => setPassR(e.target.value)}
            />
            {passR !== pass && accept && (
              <p className="error">Password doesn't match </p>
            )}
            <div style={{ textAlign: "center" }}>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
