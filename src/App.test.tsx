import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //rendu du composant dans le test bed(conteneur de test)
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //recup de l'element qui contient le texte dans react
  expect(linkElement).toBeInTheDocument(); //ici c'est notre test à proprement parlé element du DOM
});
