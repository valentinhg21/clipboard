import React, { useState } from 'react'
import './styles/Header.css'
import CartWidget from './CartWidget.js'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';



const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Container__Navbar">
            <Navbar expand="md" dark>
                <NavbarBrand href="/" className="Brand">
                    Clipboard
                </NavbarBrand>
                <div className="CartWidget-mobile">
                    <CartWidget/>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto Container__Nav" navbar>
                        <UncontrolledDropdown nav inNavbar className="Container__category">
                            <DropdownToggle className="DropdownToggle text-white" nav caret>
                                   Productos
                            </DropdownToggle>
                            <DropdownMenu className="DropdownMenu">
                                <div className="Container__products">
                                    <div>
                                        <DropdownItem header className="DropdownItem">
                                            Desktop
                                        </DropdownItem>   
                                        <DropdownItem  className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Hogar - Oficina</a>
                                        </DropdownItem>     
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Gaming</a>
                                        </DropdownItem>    
                                    <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Empresariales</a>
                                        </DropdownItem>                             
                                    </div>
                                    <div>
                                        <DropdownItem header className="DropdownItem">
                                            Notebooks
                                        </DropdownItem>   
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Hogar - Oficina</a>
                                        </DropdownItem>     
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Gaming</a>
                                        </DropdownItem>    
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Empresariales</a>
                                        </DropdownItem>                        
                                    </div>
                                    <div>
                                        <DropdownItem header className="DropdownItem">
                                            Monitores
                                        </DropdownItem>
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Led</a>
                                        </DropdownItem>  
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Lcd</a>
                                        </DropdownItem>    
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Plasma</a>
                                        </DropdownItem>                           
                                    </div>
                                    <div>
                                        <DropdownItem header className="DropdownItem">
                                            Accesorios
                                        </DropdownItem>    
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link"href="#!">Teclado y Mouse </a>
                                        </DropdownItem>     
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link"href="#!">Auriculares</a>
                                        </DropdownItem>    
                                        <DropdownItem className="DropdownItem-category">
                                            <a className="DropdownItem__link" href="#!">Parlantes</a>
                                        </DropdownItem>                          
                                    </div>
                                    <div className="DropdownItem-img">
                                    </div>
                                </div>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="NavItem">
                            <NavLink className=" NavLink text-white" href="/promociones">Promociones</NavLink>
                        </NavItem>
                        <NavItem className="NavItem">
                            <NavLink className="NavLink text-white" href="/contacto">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <div className="CartWidget-desktop">
                    <CartWidget/>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
