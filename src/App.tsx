import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <h1>Welcome to Kulinaryja!</h1>;
}

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Kulinaryja
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {/* Add more links as you add routes */}
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
