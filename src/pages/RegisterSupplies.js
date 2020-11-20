import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from './../services/api';

import Header from './../components/Header';

import '../styles/pages/registerSupplies.css';

export default function RegisterSupplies() {
    const [nomeItem, setNomeItem] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valorTotal, setValorTotal] = useState('');

    const history = useHistory();

    const loginId = localStorage.getItem('loginId');

    async function handleNewSupplies(e) {
        e.preventDefault();

        const data = {
            nomeItem,
            quantidade,
            valorTotal
        };

        try {
            await api.post('/supplies', data, {
                headers: {
                    ongid: loginId
                }
            })

        } catch (err) {
            console.log(data)
            alert('Erro ao cadastrar mantimento, tente novamente!');
        }
    }

    return (
        <div>
            <Header />
            <div className="register-supplies-container">
                <div className="content">
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={20} color="#E02041"></FiArrowLeft>
                    </Link>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h1>Cadastrar Suprimentos</h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Campos obrigatórios *</p>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <section>
                        <form onSubmit={handleNewSupplies}>
                            <label>Item <b className="required">*</b></label>
                            <input
                                placeholder="Nome do Item"
                                required
                                value={nomeItem}
                                onChange={e => setNomeItem(e.target.value)}
                            />
                            <label>Quantidade <b className="required">*</b></label>
                            <input
                                placeholder="Quantidade"
                                required
                                value={quantidade}
                                onChange={e => setQuantidade(e.target.value)}
                            />
                            <label>Valor da Compra <b className="required">*</b></label>
                            <input
                                placeholder="Valor da Compra"
                                required
                                value={valorTotal}
                                onChange={e => setValorTotal(e.target.value)}
                            />
                            <div className="alignRigthBtn">
                                <button className="bntSave" type="submit">Salvar</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}