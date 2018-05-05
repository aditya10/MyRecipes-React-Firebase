import React, { Component } from 'react';
import './App.css';
import './AddRecipe.css';
import firebase from './firebase.js';

export class DisplayRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: 'placeholder',
      time: 'placeholder',
      ingredients: 'placeholder',
      procedure: 'placeholder',
      recipeLink: 'placeholder',
      imgLink: 'placeholder'
    }

  }



  render() {
    return (
      <div className='app'>
        <div className='container'>
          <section className='display-recipe'>

                <div className="recipeName">{this.state.recipeName}</div>
                <div className="Time">Time Required: {this.state.time}</div>
                <div className="imgDiv"><img className="image" src={this.state.imgLink} /></div>
                <h2>Ingredients</h2><br />
                <div className="ingredients">{this.state.ingredients}</div>
                <h2>Procedure</h2><br />
                <div className="procedure"><p>{this.state.procedure}</p></div>
                <h2>Additional Link</h2><br />
                <div className="recipeLink">{this.state.recipeLink}</div>

          </section>
        </div>
      </div>
    );
  }
}
