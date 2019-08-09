import React, { Component }from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import RecipeList from './components/RecipeList/RecipeList'
import AddRecipe from './components/AddRecipe/AddRecipe'
import DisplayRecipe from './components/DisplayRecipe/DisplayRecipe'
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
        <Router>
          <Header/>
          <div>
            <Route exact path="/" component={RecipeList}/>
            <Route path="/add" component={AddRecipe}/>
            <Route path="/recipe/:id" component={DisplayRecipe}/>
          </div>
        </Router>
    )
  }
}

export default App;
