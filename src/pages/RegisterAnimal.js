import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import Header from './../components/Header';

import '../styles/pages/registerAnimal.css';

export default function RegisterAnimal() {
    return (
        <div>
            <Header />
            <div className="register-animal-container">
                <div className="content">
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={20} color="#E02041"></FiArrowLeft>
                    </Link>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h1>Cadastrar Animal Resgatado</h1>
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
                        <form >
                            <label>Nome <b className="required">*</b></label>
                            <input
                                placeholder="Nome"
                                required
                            />

                            <label>Porte <b className="required">*</b></label>
                            <input
                                placeholder="Porte"
                                required
                            />

                            <label>Comportamento <b className="required">*</b></label>
                            <input
                                placeholder="Comportamento"
                                required
                            />

                            <label>Imagem <b className="required">*</b></label>
                            <input
                                placeholder="Imagem"
                                required
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