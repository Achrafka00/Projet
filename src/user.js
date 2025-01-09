import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setusers(data))
      .catch((error) => console.log("Error:", error));
  }, [users]);

  function del(id) {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
  }
  const datashow = users.map((user, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <i
          class="fa-solid fa-pen-to-square"
          style={{
            color: "#74afb9",
            fontSize: "20px",
            paddingRight: "5px",
            cursor: "pointer",
          }}
        ></i>
        <i
          onClick={() => del(user.id)}
          class="fa-solid fa-trash"
          style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
        ></i>
      </td>
    </tr>
  ));
  return (
    <div style={{ padding: "20px" }}>
      <table>
        <thead>
          <th>Id</th>
          <th>User</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>{datashow}</tbody>
      </table>
    </div>
  );
}
