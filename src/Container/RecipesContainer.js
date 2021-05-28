import React from 'react';
import RecipeCard from '../Components/RecipeCard';
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import SearchBar from '../Components/SearchBar';

export default function Recipes(props) {
    return (
        <div>
            <SearchBar searchTerm={props.searchTerm} getRecipes={props.getRecipes}/>
            <Grid container direction='space-between' className='grid'>
                {props.recipes ? 
                    props.recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}/>) 
                    : 
                    <h2>no recipes</h2>
                }
            </Grid>
        </div>
    )
}