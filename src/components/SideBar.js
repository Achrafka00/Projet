import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="side-bar">
      <Link to="/Dashboard/users" className="item-link">
        Users
      </Link>
    </div>
  );
}
