import React, {Component} from 'react';

class EditRecipe extends Component {
  constructor(props) {
    super(props);
    const {id, name, description, toppings} = this.props.recipe;
    this.state = {
      id: id,
      name: name,
      description: description,
      toppings: toppings
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onEditSave({...this.state});
  }

  render() {
    const {name, description, toppings} = this.state;
    return (
      <div className="modal-bg">
        <div className="modal-box">
          <button className="btn-close danger" onClick={this.props.closeModal}>X</button>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              name="name"
              key="name"
              type="text"
              placeholder="pizza name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Description</label>
            <input
              name="description"
              key="description"
              type="text"
              placeholder="description"
              value={description}
              onChange={this.handleChange}
              required
            />
            <label>Toppings</label>
            <textarea
              name="toppings"
              key="toppings"
              placeholder="separate by commas"
              value={toppings}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Edit Recipe</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EditRecipe;
