import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <span className="nav-Logo">Pet Heaven</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Adoption">Bring them home!</Link>
          </li>
          <li>
            <Link to="/NewHome">New Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact us!</Link>
          </li>
          <li>
            <Link to="/SignUp">Part of us!</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;