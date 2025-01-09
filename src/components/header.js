import { Link } from "react-router-dom";
export default function header() {
function click(){
  window.localStorage.removeItem('email');
  window.location.pathname='/';
}

  return (
    <div className="container">
      <nav className="d-flex">
        <div className="d-flex">
          <h5>
            <Link to="/">Home</Link>
          </h5>
          <h5>
            <Link to="/About">About</Link>
          </h5>
        </div>
        {!window.localStorage.getItem('email') ?
          <div className="d-flex">
          <Link
            to="/Register"
            style={{ textAlign: "center" }}
            className="register-nav"
          >
            Register
          </Link>
          <Link
            to="/Log-in"
            style={{ textAlign: "center" }}
            className="register-nav"
          >
            Log In
          </Link>
        </div> :
          <div className="register-nav" onClick={click}>Log Out</div>
        }
      </nav>
    </div>
  );
}
