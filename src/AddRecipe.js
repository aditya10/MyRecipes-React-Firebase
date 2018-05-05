import React, { Component } from 'react';
import './App.css';
import './AddRecipe.css';

export class AddRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: '',
      time: '',
      ingredients: '',
      procedure: '',
      recipeLink: '',
      pictureLink: ''
    }
  }
  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}
handleUpload(){

}
  render() {
    return (
      <div className='app'>
        <div className='container'>
          <section className='add-recipe'>
              <form>
                <input className="smallInput" type="text" name="recipeName" placeholder="Name of Recipe" onChange={this.handleChange} value={this.state.recipeName}/>
                <input className="smallInput" type="text" name="time" placeholder="Time required to prepare" onChange={this.handleChange} value={this.state.time}/>
                <textarea className="mediumInput" type="text" name="ingredients" placeholder="List ingredients here" onChange={this.handleChange} value={this.state.ingredients}/>
                <textarea className="largeInput" type="text" name="procedure" placeholder="Enter procedure here" onChange={this.handleChange} value={this.state.procedure}/>
                <input className="smallInput" type="text" name="recipeLink" placeholder="Additional link to recipe" onChange={this.handleChange} value={this.state.recipeLink}/>
                <input className="smallInput" type="file" name="picture" accept="image/*" onChange={this.handleUpload} />
                <button><span>Add Item</span></button>
              </form>
          </section>
        </div>
      </div>
    );
  }
}
