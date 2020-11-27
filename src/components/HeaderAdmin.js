import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from './../assets/logo.svg';

import './../styles/components/headerAdmin.css'

export default function Header() {
    const history = useHistory();
    const userName = localStorage.getItem('userName');

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <Navbar bsclass="navbar" >
            <Navbar.Brand>
                <img
                    alt=""
                    src={logoImg}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <b>Ong's Control</b>
            </Navbar.Brand>
            <Navbar.Brand className="textLink" href="/profile">
                Perfil
            </Navbar.Brand>
            <Navbar.Brand className="textLink" href="/register-animal">
                Animais
            </Navbar.Brand>
            <Navbar.Brand className="textLink" href="/list-supplies">
                Mantimentos
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="user">
                    <b>{userName}</b> {''}
                    <Link onClick={handleLogout}>
                        <FiLogIn size={20} color="black"></FiLogIn>
                    </Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}