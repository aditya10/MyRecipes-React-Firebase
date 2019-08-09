import React, { Component } from 'react';
import '../../App.css';
import './RecipeList.css';
import firebase from '../../firebase/firebase-config'

class RecipeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let itemList = [];
            for (let item in items) {
                itemList.push({
                    id: item,
                    recipeName: items[item].recipeName,
                    pictureLink: items[item].pictureLink
                });
            }
            this.setState({
                items: itemList
            });
        });
    }

    render() {
        let disp = (
            <section className="recipe-bits">
                <div className='wrapper'>
                    <ul>
                        {this.state.items.map((item) => {
                            return (
                                <li className='col-md-4 col-sm-12 list'>
                                    <button onClick={() => window.open("/recipe/"+item.id,"_self")}>
                                        <div className="recipe-bit">
                                            <tbody className='table'>
                                            <tr>
                                                <td className='imgHolder' colSpan="2"><img src={item.pictureLink}/></td>
                                            </tr>
                                            <tr>
                                                <td className='rName'>{item.recipeName}</td>
                                            </tr>
                                            </tbody>
                                        </div>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="addButton" onClick={() => window.open("/add","_self")}>+</button>
                </div>
            </section>
        );



        return (
            <div className='app'>

                {disp}
                <div className="spacer"></div>
            </div>
        );
    }
}

export default RecipeList;
