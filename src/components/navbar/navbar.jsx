import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logoaja.png";
import Button from "../Button";
import "./navbar.css";

const textStyle = {
  color: "white",
};


const AppHeader = () => (
  <Navbar
    expand="lg"
    id="nav"
    className="gap-3 px-3 justify-content-between navbar-dark bg-dark"
  >
    <Navbar.Brand href="#">
      <img src={logo} alt="logo" height="70" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse>
      <Nav className="flex-grow-1 justify-content-end">
        <Nav.Item>
          <Nav.Link style={textStyle} href="#">
            HOME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={textStyle} href="#">
            FEATURES
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={textStyle} href="#">
            COMMUNITY
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={textStyle} href="#">
            ABOUT US
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button text="Login"></Button>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default AppHeader;
