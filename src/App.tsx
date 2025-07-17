import classNames from "classnames";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Kulinaryja
          </Navbar.Brand>
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
      </Navbar>
      <Container id="content" className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
