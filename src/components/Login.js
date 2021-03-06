import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';

import Header from '../components/Header';

import api from '../services/api';

import '../styles/global.css';

import ongImg from '../assets/loginImage.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const loginResponse = await api.post('/ongs/login', { "emailRequest" : email, "passwordRequest" : senha });
            alert(loginResponse.data.id);
            if(!loginResponse){
                alert("Usuário não encontrado");
                return;
            }
            
            localStorage.setItem('loginId', loginResponse.data.id);
            localStorage.setItem('userName', loginResponse.data.nome);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente!');
        }
    }
    return (
        <div>
            <Header></Header>
            <div className="logon-container">
                <section className="form">
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={20} color="#E02041"></FiArrowLeft>
                    </Link>
                    <form onSubmit={handleLogin}>
                        <h1>Fazer Login</h1>

                        <input
                            placeholder="Seu email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        >

                        </input>
                        <input
                            placeholder="Sua senha"
                            required
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            type="password"
                        >

                        </input>
                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#E02041"></FiLogIn>
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>
                <img src={ongImg} alt="ong controll"></img>
            </div>
        </div>
    )
}

export default Login;