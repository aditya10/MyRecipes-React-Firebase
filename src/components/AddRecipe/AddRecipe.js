import React, { Component } from 'react';
import '../../App.css';
import './AddRecipe.css';
import firebase from '../../firebase/firebase-config';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            time: '',
            ingredients: '',
            procedure: '',
            recipeLink: '',
            localImg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageSelect = this.handleImageSelect.bind(this);
        this.uploadEverything = this.uploadEverything.bind(this);
        this.downloadURL = '';
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleImageSelect(e){
        this.setState({localImg: e.target.files[0]});
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log('Event occured');
        if(this.state.recipeName === ''){
            alert("Error: requires name");
            return
        };
        if(this.state.localImg === ''){
            this.uploadEverything();
            return
        }
        const storageRef = firebase.storage().ref('photos');
        console.log("Submitting image with address "+this.state.localImg);
        storageRef.child('images-'+this.state.recipeName).put(this.state.localImg)
            .then(function(snapshot){
                console.log(snapshot);
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    this.downloadURL = downloadURL;
                    this.uploadEverything();
                })
            }.bind(this));
    }

    uploadEverything(){
        const itemsRef = firebase.database().ref('items');
        const item = {
            recipeName: this.state.recipeName,
            time: this.state.time,
            ingredients: this.state.ingredients,
            procedure: this.state.procedure,
            recipeLink: this.state.recipeLink,
            pictureLink: this.downloadURL
        };
        console.log('Pic available at', this.downloadURL);
        itemsRef.push(item);
        this.setState({
            recipeName: '',
            time: '',
            ingredients: '',
            procedure: '',
            recipeLink: '',
            pictureLink: ''
        });
    }

    render() {
        return (
            <div className='app'>
                <div className='container'>
                    <section className='add-recipe col-md-8 col-sm-12'>
                        <form onSubmit={this.handleSubmit}>
                            <input className="smallInput" type="text" name="recipeName" placeholder="Name of Recipe" onChange={this.handleChange} value={this.state.recipeName}/>
                            <input className="smallInput" type="text" name="time" placeholder="Time required to prepare" onChange={this.handleChange} value={this.state.time}/>
                            <textarea className="mediumInput" type="text" name="ingredients" placeholder="List ingredients here" onChange={this.handleChange} value={this.state.ingredients}/>
                            <textarea className="largeInput" type="text" name="procedure" placeholder="Enter procedure here" onChange={this.handleChange} value={this.state.procedure}/>
                            <input className="smallInput" type="text" name="recipeLink" placeholder="Additional link to recipe" onChange={this.handleChange} value={this.state.recipeLink}/>
                            <input className="smallInput" type="file" name="picture" accept="image/*" onChange={this.handleImageSelect} />
                            <button><span>Add Item</span></button>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}

export default AddRecipe;