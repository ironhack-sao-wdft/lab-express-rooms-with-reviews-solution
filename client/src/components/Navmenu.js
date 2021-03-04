import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Room Review</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link className="ml-3" to="/new-room">New Room</Link>
          <Link className="ml-3" to="#">##</Link>
          <Link className="ml-3" to="#">###</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navmenu;
