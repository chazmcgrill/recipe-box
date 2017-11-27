import css from '../css/main.sass';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const recipeData = [
  {
    id: 0,
    name: 'Margherita',
    description: 'The classic Neapolitan pizza.',
    toppings: ['Mozzarella', 'Tomatoes', 'Basil']
  },
  {
    id: 1,
    name: 'Pugliese',
    description: 'Named after the region of Apulia.',
    toppings: [ 'Oregano', 'Onion', 'Mozzarella', 'Sun Dried Tomatoes']
  },
  {
    id: 2,
    name: 'Marinara',
    description: 'Pizza marinara, also referred to as the "sailors pizza".',
    toppings: [ 'Marinara Sauce', 'Oregano', 'Garlic']
  }
];

ReactDOM.render(<App recipes={recipeData}/>, document.getElementById('root'));
