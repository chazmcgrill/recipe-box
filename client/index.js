import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Recipe extends Component {
  render() {
    return (
      <div className="list-item">Spag Bol
        <div>
          <p>Method</p>
          <ol>
            <li>Cook spag</li>
            <li>Cook veg and meat</li>
          </ol>
          <p>Ingredients</p>
          <ul>
            <li>Spaghetti</li>
            <li>Minced Beef</li>
            <li>Chopped Tomatoes</li>
          </ul>
        </div>
      </div>
    )
  }
}

class RecipeBox extends Component {
  render() {
    return (
      <div className="recipe-box">
        <Recipe />
        <div className="list-item">Macaroni Cheese</div>
        <div className="list-item">Lasagne</div>
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
  render() {
    return (
      <div className="container">
        <RecipeBox />
        <AddRecipe />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
