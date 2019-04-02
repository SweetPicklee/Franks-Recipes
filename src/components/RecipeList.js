import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const RecipeList = props => (
    <div className="recipe-list justify-content-around">
        { props.recipes && props.recipes.map((recipe, i) => {
        return (
            <Card key={i} className="recipe-card justify-content-center">
                <Card.Img 
                    variant="top"
                    className="recipe-card-image" 
                    src={recipe.recipe.image} 
                    alt={recipe.recipe.label}
                />
                <Card.Body>
                    <Card.Title className="recipe-title">{ recipe.recipe.label }</Card.Title>
                    <Card.Text className="recipe-text">Publisher: { recipe.recipe.source }</Card.Text>
                </Card.Body>
                
                <Link to={{ 
                    pathname: `/recipe/${recipe.recipe.label}`,
                    state: { recipe: recipe.recipe }
                }}><Button className="card-btn">View Recipe</Button></Link>
                
            </Card>
        );
        })}
    </div>
);

export default RecipeList;