import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

import api from './../services/api';

import HeaderAdmin from './../components/HeaderAdmin';

import '../styles/pages/updateSupplie.css';

export default function UpdateSupplie() {
    const params = useParams();

    const [nomeItem, setNomeItem] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valorTotal, setValorTotal] = useState("");

    const history = useHistory();

    const loginId = localStorage.getItem('loginId');

    const id = params.id

    useEffect(() => {
        api.get(`supplies/${id}`, {
            headers: {
                ongid: loginId,
            }
        }).then(response => {
            setNomeItem(response.data[0].nomeItem);
            setQuantidade(response.data[0].quantidade);
            setValorTotal(response.data[0].valorTotal);
        })
    }, [loginId]);

    async function handleUpdateSupplie(e) {
        e.preventDefault();

        const data = {
            nomeItem,
            quantidade,
            valorTotal
        };

        try {
            await api.put(`/supplies/${id}`, data, {
                headers: {
                    ongid: loginId
                }
            })
            history.push('/list-supplies');
        } catch (err) {
            console.log(data)
            alert('Erro ao atualizar mantimento, tente novamente!');
        }
    }

    return (
        <div>
            <HeaderAdmin />
            <div className="register-supplies-container">
                <div className="content">
                    <Link className="back-link" to="/list-supplies">
                        <FiArrowLeft size={20} color="#E02041"></FiArrowLeft>
                    </Link>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h1>Atualizar Mantimentos</h1>
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
                        <form onSubmit={handleUpdateSupplie}>
                            <label>Item <b className="required">*</b></label>
                            <input
                                required
                                value={nomeItem}
                                onChange={e => setNomeItem(e.target.value)}
                            />
                            <label>Quantidade <b className="required">*</b></label>
                            <input
                                required
                                value={quantidade}
                                onChange={e => setQuantidade(e.target.value)}
                            />
                            <label>Valor da Compra <b className="required">*</b></label>
                            <input
                                required
                                value={valorTotal}
                                onChange={e => setValorTotal(e.target.value)}
                            />
                            <div className="alignRigthBtn">
                                <Button type="submit" variant="success">Atualizar</Button>{' '}
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}