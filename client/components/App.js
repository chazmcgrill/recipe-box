import React, { Component } from 'react';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          name: 'Margherita',
          description: 'The classic neapolitan pizza',
          toppings: [ 'Mozzarella', 'Tomatoes', 'Basil']
        },
        {
          id: 1,
          name: 'Bolognese',
          description: 'Lorem ipsum dolor sit amet.',
          toppings: [ 'Onion', 'Minced Beef', 'Chopped Tomatoes']
        },
        {
          id: 2,
          name: 'Tuscan',
          description: 'Ut enim ad minim veniam.',
          toppings: [ 'Dough', 'Cheese', 'Tomato Puree']
        }
      ],
      nextRecipeId: 3,
      showNewRecipe: false
    }

    this.handleNewRecipe = this.handleNewRecipe.bind(this)
    this.openRecipeForm = this.openRecipeForm.bind(this)
  }

  toppingsArray(str) {
    return str.replace(/ /g, '').split(',');
  }

  openRecipeForm(e) {
    e.preventDefault()
    this.setState({showNewRecipe: true})
  }

  handleNewRecipe(recipe) {
    recipe.toppings = this.toppingsArray(recipe.toppings);
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showNewRecipe: false
      }
    })
  }

  render() {
    const {showNewRecipe} = this.state;
    const recipes = this.state.recipes.map((recipe, index) => (
      <Recipe key={recipe.id} recipe={recipe} />
    ));
    return (
      <div className="container">
        <div className="recipe-box">
          {recipes}
        </div>
        <button onClick={this.openRecipeForm}>Add Recipe</button>
        {showNewRecipe ? <NewRecipe
          onSave={this.handleNewRecipe}
          closeModal={() => this.setState({showNewRecipe: false})}
        /> : null}
      </div>
    )
  }
}

export default App;
