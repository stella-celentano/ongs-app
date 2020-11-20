import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from './../assets/logo.svg';

import './../styles/components/headerAdmin.css'

function Header() {

    const userName = localStorage.getItem('userName');

    return (
        <Navbar bsclass="navbar" >
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logoImg}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <b>Ong's Control</b>
            </Navbar.Brand>
            <Navbar.Brand className="textLink" href="/register-animal">
                Animais
            </Navbar.Brand>
            <Navbar.Brand className="textLink" href="/register-supplies">
                Mantimentos
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="user">
                    <b>{userName}</b> {''}
                    <Link to="/">
                        <FiLogIn size={20} color="black"></FiLogIn>
                    </Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;