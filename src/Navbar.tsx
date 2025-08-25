import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import classNames from "classnames";

const Navbar = () => (
  <BootstrapNavbar bg="light" data-bs-theme="light" expand="lg">
    <Container>
      <BootstrapNavbar.Brand as={Link} to="/">
        Kulinaryja
      </BootstrapNavbar.Brand>
      <Nav className="me-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            classNames("nav-link", { active: isActive })
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/recepies"
          className={({ isActive }) =>
            classNames("nav-link", { active: isActive })
          }
        >
          Recepies
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            classNames("nav-link", { active: isActive })
          }
        >
          Categories
        </NavLink>
      </Nav>
      <Nav>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            classNames("nav-link", { active: isActive })
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            classNames("nav-link", { active: isActive })
          }
        >
          Contact
        </NavLink>
      </Nav>
    </Container>
  </BootstrapNavbar>
);

export default Navbar;
