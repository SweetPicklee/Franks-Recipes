import React, {Component} from 'react';
import Header from './Header.js'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const API_KEY = "656fcd69bb389ceb2a79714296c08daa";
const API_ID = "68014d35"

class Recipe extends Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe.label;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`);
        const res = await req.json();
        this.setState({ activeRecipe: res.hits[0] });
    }
    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div>
                <Header />
                <div className="container">
                    { this.state.activeRecipe.length !== 0 &&
                        <Card className="recipe-show justify-content-center">
                            <Card.Img src={recipe.recipe.image} alt={recipe.recipe.title}/>
                            <Card.Title className="m-auto">{ recipe.title }</Card.Title>
                            <Card.Text className="m-auto">
                            Publisher: <span>{ recipe.recipe.source }</span>
                            </Card.Text>
                            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer"><Button>{recipe.recipe.url}</Button></a>
                            <Link to="/"><Button>Go Home</Button></Link>
                        </Card>
                    }
                </div>
            </div>
        );
    }
};

export default Recipe;