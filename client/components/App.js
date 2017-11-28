import React, { Component } from 'react';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe'
import EditRecipe from './EditRecipe'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      nextRecipeId: 3,
      showNewRecipe: false,
      showEditRecipe: false,
      editIndex: ''
    }

    this.handleNewRecipe = this.handleNewRecipe.bind(this);
    this.openRecipeForm = this.openRecipeForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditRecipe = this.handleEditRecipe.bind(this);
  }

  componentDidMount() {
    const cacheData = localStorage.getItem('ct-recipes');
    let recipes = cacheData ? JSON.parse(localStorage.getItem('ct-recipes')) : this.props.recipes;
    let nextRecipeId = cacheData ? localStorage.getItem('ct-nextRecipeId') : this.state.nextRecipeId;
    this.setState({recipes, nextRecipeId})
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
    this.setState({recipes, showEditRecipe: false});
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
    });
  }

  handleDelete(id) {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
    this.setState({recipes});
  }

  handleEdit(id) {
    const editIndex = this.state.recipes.findIndex(item => item.id === id)
    this.setState({editIndex, showEditRecipe: true})
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('ct-recipes', JSON.stringify(nextState.recipes));
    localStorage.setItem('ct-nextRecipeId', nextState.nextRecipeId);
  }

  render() {
    const {showNewRecipe, showEditRecipe, editIndex} = this.state;
    const recipeEdit = this.state.recipes[editIndex];
    const recipes = this.state.recipes.map((recipe, index) => (
      <Recipe
        key={recipe.id}
        recipe={recipe}
        onDelete={this.handleDelete}
        onEdit={this.handleEdit}
      />
    ));

    return (
      <div className="container">
        <div className="recipe-box">
          {recipes}
        </div>
        <button onClick={this.openRecipeForm}>Add Recipe</button>
        {showNewRecipe ?
          <NewRecipe
            onSave={this.handleNewRecipe}
            closeModal={() => this.setState({showNewRecipe: false})} />
        : null}
        {showEditRecipe ?
          <EditRecipe
            closeModal={() => this.setState({showEditRecipe: false})}
            onEditSave={this.handleEditRecipe}
            recipe={recipeEdit} />
        : null}
      </div>
    )
  }
}

export default App;
