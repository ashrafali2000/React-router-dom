import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from 'react-router-dom';
import { Image, Input, Space } from 'antd';
import {GiHamburgerMenu} from "react-icons/gi"
import logo from "../src/components/images/mylogo.PNG"
const { Search } = Input;

function Layout({searchHandlerBtn, inputSearchHandler}) {

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid >
            <Image src={logo} width={220} height={78}></Image>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{color:"#fff",backgroundColor:"#bbb"}}><GiHamburgerMenu></GiHamburgerMenu> </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image src={logo} width={220} height={78}></Image>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="dashboard">Dashboard</Nav.Link>
                  <NavDropdown
                    title="About"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="about">About</NavDropdown.Item>
                    <NavDropdown.Item href="about/contact">
                      Contact
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Address"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="about/address">Address</NavDropdown.Item>
                    <NavDropdown.Item href="about/address/information">
                      Information
                    </NavDropdown.Item>
                    <NavDropdown.Item href="about/address/street">
                      Street
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={inputSearchHandler}
    />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet></Outlet>
    </>
  );
}

export default Layout;