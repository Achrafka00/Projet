import { Route, Routes } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Users from "./user";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Register" element={<SignUp />} />
        <Route path="/Log-in" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />}/>
        </Route>
      </Routes>
    </div>
  );
}
