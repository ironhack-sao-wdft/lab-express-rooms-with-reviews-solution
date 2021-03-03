import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/new-room">Create Room</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
