import React, { Component } from 'react';
import './App.css';
import { AddRecipe } from './AddRecipe';
import { DisplayRecipe } from './DisplayRecipe';
import './AddRecipe.css';
import firebase from './firebase.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      addRecipe: false,
      displayRecipe: false,
      recipeID: '',
      items: []
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseAddRecipe = this.handleCloseAddRecipe.bind(this);
  }
  componentDidMount() {
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
          id: item,
          recipeName: items[item].recipeName,
          pictureLink: items[item].pictureLink
        });
      }
      this.setState({
        items: newState,
        displayRecipe: false
      });
    });
  }
  handleSelect(itemID){
    console.log(itemID);
    this.setState({recipeID: itemID, displayRecipe: true});
  }
  handleClose(){
    this.setState({recipeID: '', displayRecipe: false});
  }
  handleCloseAddRecipe(){
    this.setState({addRecipe: false});
  }
  render() {
    let disp;
    if(this.state.addRecipe){
      disp = (
        <div>
        <AddRecipe />
        <button onClick={this.handleCloseAddRecipe}>Close</button>
        </div>
    );
    }
    else if (!this.state.addRecipe && !this.state.displayRecipe){
      disp = (
        <section className="recipe-bits">
        <div className='wrapper'>
          <ul>
            {this.state.items.map((item) => {
              return (
                <li className='recipe-bit'>
                  <tbody>
                    <tr><td colSpan="2"><img src={item.pictureLink}/></td>
                    </tr>
                    <tr>
                      <td>{item.recipeName}</td>
                      <td><button onClick={() => this.handleSelect(item.id)}>View</button></td>
                    </tr>
                  </tbody>
                </li>
              )
            })}
        </ul>
        </div>
      </section>
      );
    }
    else if (this.state.displayRecipe){
      disp = (
        <div>
        <DisplayRecipe item={this.state.itemID}/>
        <button onClick={this.handleClose}>Close</button>
        </div>
      );
    }

    return (
      <div className='app'>
        <header>
            <div className='header'>
              <h1>Recipe Book</h1>
            </div>
        </header>

        {disp}
      </div>
    );
  }
}

//use hidden to show/unshow addrecipe
//make similar view for display + update
//learn about updating an item on firebase
//updateRecipe compnenet
//back button in display recipe

export default App;
