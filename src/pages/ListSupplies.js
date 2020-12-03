import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import api from './../services/api';

import HeaderAdmin from './../components/HeaderAdmin';

import './../styles/pages/listSupplies.css'

export default function ListSupplies() {
    const [supplies, setSupplies] = useState([]);

    const loginId = localStorage.getItem('loginId');

    useEffect(() => {
        api.get('supplies', {
            headers: {
                ongid: loginId,
            }
        }).then(response => {
            setSupplies(response.data);
        })
    }, [loginId]);

    async function handleDeleteSupplie(id) {
        try {
            await api.delete(`supplies/${id}`, {
                headers: {
                    ongid: loginId,
                }
            });

            setSupplies(supplies.filter(supplie => supplie.id !== id));
        } catch (err) {
            alert('Erro ao deletar mantimento, tente novamente.');
        }
    }

    return (
        <div>
            <HeaderAdmin />
            <div className="alignRigthBtn">
                <Button href="/register-supplies" variant="primary">Adicionar</Button>{' '}
            </div>
            <div className="container">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {supplies.map(supplie => (
                        <tbody key={supplie.id}>
                            <tr>
                                <td>{supplie.id}</td>
                                <td>{supplie.nomeItem}</td>
                                <td>{supplie.quantidade}</td>
                                <td>R$ {supplie.valorTotal}</td>
                                <td>
                                    <Button onClick={() => handleDeleteSupplie(supplie.id)} type="button" size="sm" variant="outline-danger"><b>Excluir</b></Button> {' '}
                                    <Button href={`/update-supplie/${supplie.id}`} size="sm" variant="outline-warning"><b>Editar</b></Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
}