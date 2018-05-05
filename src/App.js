import React, { Component } from 'react';
import './App.css';
import { AddRecipe } from './AddRecipe';
import './AddRecipe.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      addRecipe: false
    }
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className='header'>
              <h1>Recipe Book</h1>
            </div>
        </header>
        <AddRecipe />
        <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
      </div>
    );
  }
}

//use hidden to show/unshow addrecipe
//make similar view for display + update
//learn about updating an item on firebase
//updateRecipe compnenet

export default App;
