import React from "react";
// React Router
import { NavLink } from "react-router-dom";

// Estilos
import "../Header/Header.css";

// React-Boostrap
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";



const Header = () => {
  return (
    <>
      <Navbar variant="dark" className="Navbar" expand="xl">
        <Container>
          <Navbar.Brand className="NavbarBrand" href="/">Clipboard</Navbar.Brand>
          <div className="Container__CartWdiget">
            <CartWidget/>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={NavLink} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link href="/tienda">Tienda</Nav.Link>

              <NavDropdown
                className="NavDropdown"
                title="Productos"
                id="basic-nav-dropdown"
              >
                {/* Computadoras Categoria */}
                <NavDropdown.Header className="NavDropdownHeader">
                  Computadoras
                </NavDropdown.Header>
                <NavDropdown.Item className="NavDropdownItem" to="/products/computadoras/computadoras-gaming" as={NavLink} >
                  Gaming
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="NavDropdownItem"
                  to="/products/computadoras/computadoras-empresarial"
                  as={NavLink} 
                >
                  Empresariales
                </NavDropdown.Item>

                {/* Notebooks Categoria */}
                <NavDropdown.Header className="NavDropdownHeader">
                  Notebooks
                </NavDropdown.Header>
                <NavDropdown.Item className="NavDropdownItem" as={NavLink} to="/products/notebook/notebook-gaming">
                  Gaming
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="NavDropdownItem"
                  as={NavLink} 
                  to="/products/notebooks/notebook-empresarial"
                >
                  Empresariales
                </NavDropdown.Item>

                {/* Accesorios Categoria */}
                <NavDropdown.Header className="NavDropdownHeader">
                  Accesorios
                </NavDropdown.Header>
                <NavDropdown.Item className="NavDropdownItem" as={NavLink} to="/products/accesorios/teclados">
                  Teclados
                </NavDropdown.Item>
                <NavDropdown.Item className="NavDropdownItem"  as={NavLink} to="/products/accesorios/mouse">
                  Mouse
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="NavDropdownItem"
                  as={NavLink} 
                  to="/products/accesorios/auriculares"
                >
                  Auriculares
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/login">
                Entrar
              </Nav.Link>
              <Nav.Link as={NavLink} className="CartWidget__desktop" to="/">
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
