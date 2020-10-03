import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import { accountService } from '../_services'

function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="light" light expand="md" className="p-0">
            <Container>
                <NavbarBrand to="/" tag={Link}>
                    <img alt="..." src={require("../assets/img/brand/afrilearn_logo.png")} width="180px" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Dashboard</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <button onClick={accountService.logout} className="btn logout"><i className="fa fa-sign-out" /> Logout</button>
                    </NavbarText>
                </Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default DashboardNavbar;