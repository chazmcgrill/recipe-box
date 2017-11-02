import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let recipes = [
  {
    name: 'Margherita',
    description: 'The classic neapolitan pizza',
    toppings: [ 'Mozzarella', 'Tomatoes', 'Basil']
  },
  {
    name: 'Bolognese',
    description: 'Lorem ipsum dolor sit amet.',
    toppings: [ 'Onion', 'Minced Beef', 'Chopped Tomatoes']
  },
  {
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

  componentDidMount() {
    console.log(this.state.foundRecipes);
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
      name: "",
      description: "",
      toppings: ""
    }
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let tops = [];
    tops.push(this.state.toppings);
    const pizzaObj = {
      name: this.state.name,
      description: this.state.description,
      toppings: tops
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
        <RecipeBox recipeList={this.state.foundRecipes}/>
        <button onClick={this.openAddModal.bind(this)}>Add Recipe</button>
        {this.state.addRecipe ? <AddRecipe newPizza={this.addNewPizza.bind(this)} closeAddModal={this.closeAddModal.bind(this)} /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App recipeList={recipes}/>, document.getElementById('root'));
