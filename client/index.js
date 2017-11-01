import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let recipes = [
  {
    name: 'Macaroni Cheese',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    toppings: [ 'Cheese', 'Macaroni', 'Salt & Pepper']
  },
  {
    name: 'Spaghetti Bolognese',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    toppings: [ 'Spaghetti', 'Minced Beef', 'Chopped Tomatoes']
  },
  {
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    toppings: [ 'Dough', 'Cheese', 'Tomato Puree']
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
          <p>{this.props.recipe.description}</p>
          <strong>Toppings</strong>
          <ul>
            {this.props.recipe.toppings.map(function(item, i) {
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
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="modal-bg">
        <div className="modal-box">
          <button onClick={this.props.closeAddModal} className="btn-close">X</button>
          <form>
            <label htmlFor="name">Name</label>
            <input placeholder="name" id="name"/>
            <label htmlFor="desc">Description</label>
            <input placeholder="description" id="desc"/>
            <label htmlFor="tops">Toppings</label>
            <textarea placeholder="toppings" id="tops"/>
            <button>Add Recipe</button>
          </form>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundRecipes: this.props.recipeList,
      addRecipe: false
    };
  }

  closeAddModal() {
    this.setState({
      addRecipe: false
    })
  }

  openAddModal() {
    this.setState({
      addRecipe: true
    })
  }

  render() {
    return (
      <div className="container">
        <RecipeBox recipeList={this.state.foundRecipes}/>
        <button onClick={this.openAddModal.bind(this)}>Add Recipe</button>
        {this.state.addRecipe ? <AddRecipe closeAddModal={this.closeAddModal.bind(this)} /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App recipeList={recipes}/>, document.getElementById('root'));
