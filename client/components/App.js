import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div className="list-item" >
        <h4>{this.props.recipe.name}</h4>
        <div>
          <p>{this.props.recipe.description}</p>
          <strong>Toppings</strong>
          <ul>
            {this.props.recipe.toppings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button className="danger">Delete</button>
          <button>Edit</button>
        </div>
      </div>
    )
  }
}

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
      </div>
    )
  }
}

export default App;
