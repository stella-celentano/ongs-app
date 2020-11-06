import React from 'react';

import Header from './../components/Header';

import '../styles/pages/registerSupplies.css';

export default function RegisterSupplies() {
    return (
        <div>
            <Header />
            <div className="register-supplies-container">
                <div className="content">
                    <section>
                        <form >
                            <h1>Cadastrar Suprimentos</h1>
                            <p>Campos obrigatórios *</p>

                            <label>Nome <b className="required">*</b></label>
                            <input
                                placeholder="Nome"
                                required
                            />

                            <label>Quantidade <b className="required">*</b></label>
                            <input
                                placeholder="Quantidade"
                                required
                            />

                            <label>Doação <b className="required">*</b></label>
                            <input
                                placeholder="Doação"
                                required
                            />

                            <label>Valor da Compra <b className="required">*</b></label>
                            <input
                                placeholder="Valor da Compra"
                                required
                            />

                            <label>Data <b className="required">*</b></label>
                            <input
                                placeholder="Data"
                                required
                            />


                            <div className="alignRigthBtn">
                                <button className="bntCancel" type="submit">Cancelar</button>
                                <button className="bntSave" type="submit">Salvar</button>
                            </div>


                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}