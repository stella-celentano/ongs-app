import React, { useState } from 'react';

import api from './../services/api';
import Header from '../components/Header';
import '../styles/global.css';
import ongImg from '../assets/loginImage.svg';


function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [nome, setNome] = useState('');
    const [nome_responsavel, setNomeResponsavel] = useState('');
    const [descricao, setDescricao] = useState('');

    async function handleNewOng(e) {
        e.preventDefault();

        const data = {
            nome,
            descricao,
            email,
            nome_responsavel,
            senha
        };

        const id = localStorage.setItem('id');

        try {
            await api.post('/ongs', data, {
                headers: {
                    ongid: id
                }
            })
        } catch (err) {
            console.log(data)
            alert('Erro ao cadastrar sua ong, tente novamente!');
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="logon-container">
                <section className="form">
                    <form onSubimit={handleNewOng}>
                        <h1>Sua Ong não está cadastrada?</h1>

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
                            id="password"
                        >

                        </input>

                        <input
                            placeholder="Confirme sua senha"
                            required
                            value={confirmarSenha}
                            onChange={e => setConfirmarSenha(e.target.value)}
                            type="password"
                            id="confirm_password"
                        >

                        </input>

                        <input
                            placeholder="Nome da Ong"
                            required
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        >

                        </input>

                        <input
                            placeholder="Nome do Responsavel"
                            required
                            value={nome_responsavel}
                            onChange={e => setNomeResponsavel(e.target.value)}
                        >

                        </input>

                        <input
                            placeholder="Descrição de sua ONG"
                            required
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        >

                        </input>

                        <button className="button" type="submit">Cadastrar</button>

                    </form>
                </section>
                <img src={ongImg} alt="ong controll"></img>
            </div>
        </div>
    )
}

export default Register;