import React from 'react';
import { Navbar } from 'react-bootstrap'

import logoImg from './../assets/logo.svg';
import loginImg from './../assets/login.svg';

import  './../styles/components/header.css'

function Header() {

    return (
        <Navbar bsClass="navbar" >
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logoImg}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <b>Ong's Control</b>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#login"><img src={loginImg} alt=""/></a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;