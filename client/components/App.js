import React, { Component } from 'react';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe'
import EditRecipe from './EditRecipe'

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
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEditRecipe = this.handleEditRecipe.bind(this)
  }

  toppingsArray(str) {
    return str.replace(/ /g, '').split(',');
  }

  openRecipeForm(e) {
    e.preventDefault()
    this.setState({showNewRecipe: true})
  }

  handleEditRecipe(recipe) {
    if (!Array.isArray(recipe.toppings)) {
      recipe.toppings = this.toppingsArray(recipe.toppings);
    }
    const recipes = this.state.recipes.slice();
    recipes[recipe.id] = recipe;
    this.setState({recipes});
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

  handleDelete(id) {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showNewRecipe} = this.state;
    const recipes = this.state.recipes.map((recipe, index) => (
      <Recipe key={recipe.id} recipe={recipe} onDelete={this.handleDelete}/>
    ));
    const recipeEdit = this.state.recipes[2];
    console.log(recipeEdit);
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
        <EditRecipe
          onEditSave={this.handleEditRecipe}
          recipe={recipeEdit}/>
      </div>
    )
  }
}

export default App;
