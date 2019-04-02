import React, { Component } from 'react';
import Header from './components/Header.js'
import RecipeList from './components/RecipeList'
import Search from './components/Search'
import './App.css';

const API_KEY = "656fcd69bb389ceb2a79714296c08daa";
const API_ID = "68014d35";

class App extends Component {
    state = {
        recipes: []
    }
    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}`);
        const data = await api_call.json();
        this.setState({ recipes: data.hits });
    }
    componentDidMount = () => {
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({ recipes });
    }
    componentDidUpdate = () => {
        const recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem("recipes", recipes);
    }
	render() {
        return (
            <div className="App">
                <Header />
                <Search getRecipe={this.getRecipe} />
                <RecipeList recipes={this.state.recipes} />
            </div>
        )
    }
}


export default App;
