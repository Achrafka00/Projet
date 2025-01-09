import { useState } from "react";
import axios from "axios";
import Header from "./components/header";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [emailerr, setemailerr] = useState();

  const [accept, setAccept] = useState(false);

  async function Submit(e) {
    let flag = true;

    e.preventDefault();
    setAccept(true);

    if (pass.length < 8) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        const res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: pass,
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
            <div style={{ textAlign: "center" }}>
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default function login() {
//   const [email, setemail] = react.useState("");
//   const [pass, setpass] = react.useState("");

//   const [accept, setaccept] = react.useState(false);
//   const [flag, setflag] = react.useState(true);
//   const [emailerr, setemailerr] = react.useState("");

//   async function Submit(e) {
//     e.preventDefault();
//     setaccept(true);
//     if (pass < 8) {
//       setflag(false);
//     }
//     try {
//       if (flag) {
//         let res = await axios.post("http://127.0.0.1:8000/api/register", {
//           email: email,
//           password: pass,
//         });
//       }
//     } catch (err) {
//       setemailerr(err.response.status);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={Submit}>
//         <label htmlFor="Email">Email:</label>
//         <input
//           id="Email"
//           type="email"
//           value={email}
//           onChange={(e) => setemail(e.target.value)}
//         />
//         {emailerr === 422 && accept && <p>email already taken</p>}
//         <label htmlFor="pass">password:</label>
//         <input
//           id="pass"
//           type="password"
//           value={pass}
//           onChange={(e) => setpass(e.target.value)}
//         />
//         {pass.length < 8 && accept && <p>Mdp must be more 8 char</p>}
//         <div>
//           <button type="submit">LOGIN</button>
//         </div>
//       </form>
//     </div>
//   );
// }
