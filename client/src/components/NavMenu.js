function NavMenu() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <nav className="nav">
        <a className="nav-link active" href="/">
          Home
        </a>
        <a className="nav-link" href="/room/new">
          New room
        </a>
      </nav>
    </nav>
  );
}

export default NavMenu;
