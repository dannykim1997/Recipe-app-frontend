import React from 'react';
import { withRouter } from 'react-router';
import RecipeCard from '../Components/RecipeCard';
import RecipePage from '../Components/RecipePage';
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../Components/SearchBar';

class Recipes extends React.Component {
    
    render() {
        return (
            <div>
            <SearchBar searchTerm={this.props.searchTerm} getRecipes={this.props.getRecipes}/>
            <Grid container direction='space-between' className='grid'>
                    {this.props.recipes ? 
                    this.props.recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}/>) 
                    : 
                    <h2>no recipes</h2>
                    }
            </Grid>
            </div>
        )
    }
}

export default withRouter(Recipes)