import React from 'react';
import {
    Navbar,
    NavItem,
    Nav
} from 'react-bootstrap';
class Header extends React.Component {
    render() {
        return <div>
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Belmin Mustajbasic</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Getting started
                        </NavItem>
                        <NavItem eventKey={1} href="/docs">
                            Docs
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="https://github.com/Mustajbasic/bemu-validator" target="blank">
                            Github
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }
}

export default Header;