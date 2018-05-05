import React, { Component } from 'react';
import './App.css';
import { AddRecipe } from './AddRecipe';
import { DisplayRecipe } from './DisplayRecipe';
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
        <DisplayRecipe />
      </div>
    );
  }
}

//use hidden to show/unshow addrecipe
//make similar view for display + update
//learn about updating an item on firebase
//updateRecipe compnenet

export default App;
