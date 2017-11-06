import css from '../css/main.sass';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let recipes = [
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

  delete() {
    var id = this.props.recipe.id;
    recipes = recipes.filter(function(element) {
      return element.id !== id;
    });
  }

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
          <button id={this.props.recipe.id} onClick={this.delete.bind(this)}>Delete</button>
          <button>Edit</button>
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
              <Recipe
                recipe={recipe}
                key={recipe.id}/>
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
      name: "",
      description: "",
      toppings: "",
      idCounter: recipes.length
    }
  }

  componentDidMount() {
    console.log(this.state.idCounter);
  }

  toppingsArray(str) {
    return str.replace(/ /g, '').split(',');
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  uniqueId(id) {
    console.log('id counter state: ' + this.state.idCounter);
    console.log('id passed: ' + this.state.idCounter);
    this.setState({ idCounter: id})
    return id;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const pizzaObj = {
      id: this.uniqueId(this.state.idCounter + 1),
      name: this.state.name,
      description: this.state.description,
      toppings: this.toppingsArray(this.state.toppings)
    };
    this.props.newPizza(pizzaObj);
  }

  render() {
    return (
      <div className="modal-bg">
        <div className="modal-box">
          <button onClick={this.props.closeAddModal} className="btn-close">X</button>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <label>Name</label>
            <input name="name" type="text" placeholder="pizza name"
              onChange={this.handleChange.bind(this)}
            />
            <label>Description</label>
            <input name="description" type="text" placeholder="description"
              onChange={this.handleChange.bind(this)}
            />
            <label>Toppings</label>
            <textarea name="toppings" placeholder="separate by commas"
              onChange={this.handleChange.bind(this)}
            />
            <input type="submit" value="Add Recipe"></input>
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

  addNewPizza(pizza) {
    var temp = this.state.foundRecipes.slice();
    temp.push(pizza);
    this.setState({foundRecipes: temp});
    console.log(this.state.foundRecipes);
  }


  render() {
    return (
      <div className="container">
        <RecipeBox
          recipeList={this.state.foundRecipes}
        />
        <button onClick={this.openAddModal.bind(this)}>Add Recipe</button>
        {this.state.addRecipe ? <AddRecipe newPizza={this.addNewPizza.bind(this)} closeAddModal={this.closeAddModal.bind(this)} /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App recipeList={recipes}/>, document.getElementById('root'));
