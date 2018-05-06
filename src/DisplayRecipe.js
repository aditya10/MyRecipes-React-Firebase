import React, { Component } from 'react';
import './App.css';
import './DisplayRecipe.css';
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

componentDidMount() {
  console.log(this.props.item);
  const itemsRef = firebase.database().ref('items/'+this.props.item);
  itemsRef.on('value', (snapshot) => {
    let item = snapshot.val();
    this.setState({
        recipeName: item.recipeName,
        time: item.time,
        ingredients: item.ingredients,
        procedure: item.procedure,
        recipeLink: item.recipeLink,
        imgLink: item.pictureLink
      });
    });
  }


  render() {
    return (
      <div className='app'>
        <div className='container'>
          <section className='display-recipe col-md-8 col-sm-12'>

                <div className="recipeName">{this.state.recipeName}</div>
                <div className="time">Time Required: {this.state.time}</div>
                <div className="imgDiv"><img className="image" src={this.state.imgLink} /></div>
                <h2>Ingredients</h2>
                <div className="ingredients">{this.state.ingredients}</div>
                <h2>Procedure</h2>
                <div className="procedure"><p>{this.state.procedure}</p></div>
                <h2>Additional Link</h2>
                <div className="recipeLink"><a href={this.state.recipeLink}>{this.state.recipeLink}</a></div>

          </section>
        </div>
      </div>
    );
  }
}
