import React from 'react';
import { Card, Button} from 'react-bootstrap'

import Header from '../components/Header';


import '../styles/components/box.css';

const Menu = () => {
	
	const cardInfo = [
		{image: "https://xinjiang.birds.watch/photos/0126/001/01260036601.jpg",
		 title: "Patos precisam ser resgatados",
		 text:"Nós da Associação Salve os Rios precisamos da sua ajuda com doações para levarmos nossos patos para um rio sem poluição" },

		{image: "https://www.petz.com.br/blog/wp-content/uploads/2019/09/cachorro-e-gato-1200x805.jpg",
		 title: "Cães e gatos prontos para adoção",
		 text:"Estes lindos animais precisam urgentemente de alguém que possa dar um novo lar à eles, todos estão devidamente chipados e vacinados" },

		{image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" },

		 {image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" },

		 {image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" },

		 {image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" },

		 {image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" },

		 {image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" },

		 {image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" },

		 {image: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/como-criar-papagaio-1200x805.jpg",
		 title: "Precisamos de mantimentos",
		 text:"A equipe de ajudantes necessitam de uma quantidade alta de mantimentos para que os animais não passem necessidades" }
		 


	];

const renderCard = (card, index) => {
	return(
		<Card id="animal" style={{ width: '18rem', color: 'black'}} key={index} className="box">
			<Card.Img  variant="top" src={card.image} />
			<Card.Body>
				<Card.Title>{card.title}</Card.Title>
				<Card.Text>
					{card.text}
				</Card.Text>
				<Button style={{background: 'rgba(199, 243, 203, 0.69)', color:'black'}} variant="success">Contato via Whatsapp</Button>
			</Card.Body>
		</Card>
	)
};

    return (
        <div>
            <Header></Header>
			<b style={{color: 'black', marginLeft: '10px'}}>Amiguinhos à procura de ajuda</b>
			<p style={{color: 'black', marginLeft: '10px'}}>Faça uma adoção consciente, dê um lar para um novo amiguinho, basta entrar em contato com a ONG que está abrigando o animal, ou se não, ajude outra Ong com doações de mantimentos!! </p>
			<div className="grid">
				{cardInfo.map(renderCard)}
			</div>
        </div>
    )
}

export default Menu;