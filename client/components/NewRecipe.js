import React, {Component} from 'react';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      toppings: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  toppingsArray(str) {
    return str.replace(/ /g, '').split(',');
  }

  render() {
    const {title, description, toppings} = this.state;
    return (
      <div className="modal-bg">
        <div className="modal-box">
          <button className="btn-close" onClick={this.handleChange}>X</button>
          <form onSubmit={() => {}}>
            <label>Name</label>
            <input
              name="title"
              key="title"
              type="text"
              placeholder="pizza name"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label>Description</label>
            <input
              name="description"
              key="description"
              type="text"
              placeholder="description"
              value={description}
              onChange={this.handleChange}
            />
            <label>Toppings</label>
            <textarea
              name="toppings"
              key="toppings"
              placeholder="separate by commas"
              value={toppings}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              value="Add Recipe"></button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddRecipe;
