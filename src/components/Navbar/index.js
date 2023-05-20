import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import MyButton from "../Button";

function Header({ navbars }) {
  return (
    <Navbar className="navbar-app p-3" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            {navbars.map((item, idx) => {
              return (
                <Nav.Link className="mr-3" key={idx} href={item.url}>
                  {item.page}
                </Nav.Link>
              );
            })}
          </Nav>
          <MyButton btnClassName={"sign-in-btn"} btnText={"Masuk/Daftar"} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
