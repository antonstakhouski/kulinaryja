import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar.tsx";

const App = () => (
  <>
    <Navbar />
    <Container id="content">
      <Outlet />
    </Container>
  </>
);

export default App;
