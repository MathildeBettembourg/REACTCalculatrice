import Card from "./Card";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import CardProps from "./Card.type";

//chercher elemet ds storybook dans les autres fichiers
//icion conne la definition de la story, l'intégration du composant)
export default{
    //cela sera affiché dans la page, le titre de la story
    title:"shared/Card", 
    //composant à tester
    component:Card, 
} as ComponentMeta<typeof Card>;


//comment charger le component de base, version de base
//factory pour le composant
const Template: ComponentStory<typeof Card> =(args:CardProps) =><Card {...args}/>

//exemple basique, création d'une story basique
export const Basic = Template.bind({});

Basic.args={
    title:"Titre", 
    body:"lorem ipsum doloret sit amet consectatur..."
}
//bind creer une copie du template et l'envoie dans storybook avec un nom specifique
export const AvecFooter = Template.bind({})

AvecFooter.args={
    title:"Titre", 
    body:"j'ai un FOOTER ", 
    footer:"huhu je suis le footer"
}
export const AvecButton = Template.bind({})

AvecButton.args={
    title:"Titre", 
    body:"j'ai un FOOTER ", 
    footer:"huhu je suis le footer",
    buttonLabel:'Je suis un bouton'
}

export const Complet = Template.bind({})

Complet.args={
    title:"Artemis day", 
    body:"j'ai un FOOTER ", 
    footer:"huhu je suis le footer",
    buttonLabel:'Je suis un bouton', 
    buttonAction:()=>alert('ok')
}