import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">MyApp</div>
      <ul className="navbar__menu">
        <NavLink to="/about" className="navbar__item">About</NavLink>
        <NavLink to="/contact" className="navbar__item">Contact</NavLink>
        <NavLink to="/" className="navbar__item">Resume</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar