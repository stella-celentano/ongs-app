import React from 'react';

import Header from './../components/Header';

import '../styles/pages/registerAnimal.css';

export default function RegisterAnimal() {
    return (
        <div>
            <Header />
            <div className="register-animal-container">
                <div className="content">
                    <section>
                        <form >
                            <h1>Cadastrar Animal Resgatado</h1>
                            <p>Campos obrigatórios *</p>

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

                            <label>Data do acolhimento <b className="required">*</b></label>
                            <input
                                placeholder="Data"
                                required
                            />

                            <label>WhatsApp <b className="required">*</b></label>
                            <input
                                placeholder="WhatsApp"
                                required
                            />

                            <label>Imagem <b className="required">*</b></label>
                            <input
                                placeholder="Imagem"
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