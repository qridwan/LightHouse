import firebase from "firebase/app";
import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [user, setUser] = useContext(UserContext);
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      className="px-3 bg-navyBlue"
    >
      <Navbar.Brand>
        <Link style={{ textDecoration: "none" }} to="/">
          <h3
            style={{ fontSize: "1.3rem" }}
            className="text-light font-weight-bolder hover-none"
          >
            LIGHT HOUSE
          </h3>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link className="text-light " to="/">
              HOME
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-light" to="/admin">
              ADMIN
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/order" className="text-light">
              ORDER
            </Link>
          </Nav.Link>
          {user.isSigned ? (
            <Nav.Link color="inherit">
              <span
                onClick={handleSignOut}
                className="text-light font-weight-bolder "
              >
                LogOut
              </span>
            </Nav.Link>
          ) : (
            <Nav.Link color="inherit">
              <Link className="text-light" to="/login">
                LOGIN
              </Link>
            </Nav.Link>
          )}
          <Nav.Link color="inherit">
            <img src={logo} alt="lg" height="35" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
