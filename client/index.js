import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let recipes = [
  {
    name: 'Macaroni Cheese',
    method: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ingredients: [ 'Cheese', 'Macaroni', 'Salt & Pepper']
  },
  {
    name: 'Spaghetti Bolognese',
    method: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ingredients: [ 'Spaghetti', 'Minced Beef', 'Chopped Tomatoes']
  },
  {
    name: 'Pizza',
    method: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ingredients: [ 'Dough', 'Cheese', 'Tomato Puree']
  }
];

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  toggleClass() {
    let status = this.state.open;
    this.setState({
      open: !status
    });
  }

  isShowing() {
    return this.state.open ? '' : 'hidden';
  }

  render() {
    return (
      <div className="list-item" onClick={this.toggleClass.bind(this)}>
        <h4>{this.props.recipe.name}</h4>
        <div className={this.isShowing()}>
          <strong>Method</strong>
          <p>{this.props.recipe.method}</p>
          <strong>Ingredients</strong>
          <ul>
            {this.props.recipe.ingredients.map(function(item, i) {
              return (
                <li key={i}>{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundRecipes: this.props.recipeList
    }
  }

  render() {
    return (
      <div className="recipe-box">
          {this.props.recipeList.map(function(recipe, i) {
            return (
              <Recipe recipe={recipe} key={i}/>
            )
          })}
      </div>
    )
  }
}

class AddRecipe extends Component {
  render() {
    return (
      <div>
        <button>Add Recipe</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundRecipes: this.props.recipeList
    };
  }

  render() {
    return (
      <div className="container">
        <RecipeBox recipeList={this.state.foundRecipes}/>
        <AddRecipe />
      </div>
    )
  }
}

ReactDOM.render(<App recipeList={recipes}/>, document.getElementById('root'));
