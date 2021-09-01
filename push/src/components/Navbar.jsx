import { Link } from "react-router-dom";

const Navbar = ({ title, end, start }) => {
  return (
    <header className="app-header">
      <nav className="navbar container">
        <Link to="/" className="nav-brand d-flex">
          <h1>{title}</h1>
          <img src="img/1.jpg" alt="" id="imgone" />
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {end}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              {start}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
