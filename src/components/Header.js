import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'


class Header extends Component {
    
    render() {
        return (
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand className="navbar-brand m-auto" href="/">Frank's Recipes</Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header