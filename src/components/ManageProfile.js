import React from 'react';
import { Button, Card, Badge, Accordion, Table, Form, Row, Col } from 'react-bootstrap';

import '../styles/components/ManageProfile.css';

import HeaderAdmin from './../components/HeaderAdmin';

export default function ManageProfile() {
    return (
        <div>
            <HeaderAdmin />
            <div className="logon-container">
                <Card style={{ width: '35rem' }}>
                    <Card.Img style={{ width: '10rem' }} className="profileImage" variant="top" src="https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg" />
                    <Card.Body>
                        <Card.Title className="mb-2 text-muted">Ong amor e compaixao<Badge variant="secondary">Novo Usuário</Badge></Card.Title>
                        <Card.Text className="mb-2 text-muted">
                            **descrição da ong** Cuidamos do seu periquito belga, consectetur adipiscing elit. Nunc scelerisque et lacus sit amet facilisis. Curabitur in odio quis quam consequat consequat eu ac orci.
                        </Card.Text>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle className="button" as={Button} variant="link" eventKey="0">
                                        Dados
                        </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Control placeholder="Nome do responsável" />
                                                </Col>
                                                <Col>
                                                    <Form.Control placeholder="Nome Ong" />
                                                </Col>
                                            </Row>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Email da ong" />
                                                <Form.Text className="text-muted">
                                                    Não compartilharemos seu email com ninguém
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Senha" />
                                            </Form.Group>
                                            {/* <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group> */}
                                            <Button variant="primary" type="submit">
                                                Alterar
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle className="button" as={Button} variant="link" eventKey="1">
                                        Animais
                        </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#Id</th>
                                                    <th>Nome</th>
                                                    <th>Porte</th>
                                                    <th>Comportamento</th>
                                                    <th>Cadastrado Em</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>grande</td>
                                                    <td>cuidadoso</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>periquito belga</td>
                                                    <td>pequeno</td>
                                                    <td>bravo</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Larry the Bird</td>
                                                    <td>pequeno</td>
                                                    <td>agressivo</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}