import React, { Component } from 'react';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 3,
      recipes: [
        {
          id: 1,
          name: 'Margherita',
          description: 'The classic neapolitan pizza',
          toppings: [ 'Mozzarella', 'Tomatoes', 'Basil']
        },
        {
          id: 2,
          name: 'Bolognese',
          description: 'Lorem ipsum dolor sit amet.',
          toppings: [ 'Onion', 'Minced Beef', 'Chopped Tomatoes']
        },
        {
          id: 3,
          name: 'Tuscan',
          description: 'Ut enim ad minim veniam.',
          toppings: [ 'Dough', 'Cheese', 'Tomato Puree']
        }
      ]
    };
  }

  render() {
    const recipes = this.state.recipes.map((recipe, index) => (
      <Recipe key={index} recipe={recipe} />
    ));
    return (
      <div className="container">
        <div className="recipe-box">
          {recipes}
        </div>
        <button>Add Recipe</button>
        <NewRecipe />
      </div>
    )
  }
}

export default App;
