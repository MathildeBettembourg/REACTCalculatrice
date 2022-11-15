import { fireEvent, render, screen } from "@testing-library/react"
import Card from "./Card"
import CardProps from "./Card.type";

describe('Card', () => { 
    const cardProps:CardProps={
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.        Ad culpa aspernatur molestias odit, amet porro tempore quis hic placeat veritatis voluptatibus itaque voluptas, laboriosam dignissimos eum facilis ducimus. Ipsa, veniam?",
        title: "maCarte",
        footer:"je suis le footer", 
        buttonLabel:"je suis le label"
    }
    it('il doit fournir un rendu', () =>{
        render(<Card title={cardProps.title} body={cardProps.body}/>)
        const card = screen.getByText("maCarte");
        expect(card).toBeInTheDocument();
    });
    it('il doit afficher le titre dans une section avec la classe card title', () =>{
        render(<Card title={cardProps.title} body={cardProps.body}/>)
        const card = document.getElementsByClassName("card-title")[0]
        expect(card).toBeInTheDocument();
    });
    it('il doit afficher le titre dans une section', () =>{
        render(<Card title={cardProps.title} body={cardProps.body}/>)
        const card = document.getElementsByClassName("card-title")[0]
        //on regarde le contenue de l'element à l'index 0 et regarde sa classname
        expect(card.textContent).toBe(cardProps.title)
    });
    it('il doit afficher le body dans une section avec classe card-body', () =>{
        render(<Card title={cardProps.title} body={cardProps.body}/>)
        const card = document.getElementsByClassName("card-body")[0]
        //on regarde le contenue de l'element à l'index 0 et regarde sa classname
        expect(card.textContent).toBe(cardProps.body)
    });
    it('il doit afficher le footer dans une section avec classe card-footer quand j\'ai une props footer uniquement', () =>{
        render(<Card title={cardProps.title} body={cardProps.body} footer={cardProps.footer}/>)
        const card = document.getElementsByClassName("card-footer")[0]
        //on regarde le contenu de l'element à l'index 0 et regarde sa classname
        expect(card.textContent).toBe(cardProps.footer)
    });
    it('il NE DOIT PAS afficher le footer', () =>{
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const element = document.getElementsByClassName("card-footer")[0]
        //on regarde la card
        //si il n'y a pas de valeur pour le footer ca doit rien afficher.
        //sinon on affiche la valeur du footer
        expect(element).toBeUndefined()
    });
    it('il doit afficher le bouton avec le label', () =>{
        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} />)
        const element = screen.getByText(cardProps.buttonLabel as string)
        //on regarde la card
        //si il n'y a pas de valeur pour le footer ca doit rien afficher.
        //sinon on affiche la valeur du footer
        expect(element).toBeInTheDocument()
    });
    it('il doit ne pas afficher le bouton si il n\'y a pas de label', () =>{
        render(<Card title={cardProps.title} body={cardProps.body}/>)
        const element = document.getElementsByTagName("button")[0]
        //on regarde la card
        //si il n'y a pas de valeur pour le footer ca doit rien afficher.
        //sinon on affiche la valeur du footer
        expect(element).toBeUndefined()
    });
    it('il doit appeler l\'action du bouton quand on clic dessus', () =>{
        //fonction spy pour surveiller l'action sur le bputon
        const handleClick = jest.fn();
        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} buttonAction={handleClick}/>)
        //recup le bouton
        const button = document.querySelector('button');
        //clic sur le bouton, fireEvent quand click sur e butoon
        fireEvent.click(button!)
        //verifie que la fonction déclanchée par le click a été appelée appelée
        expect(handleClick).toHaveBeenCalled();
    });
})