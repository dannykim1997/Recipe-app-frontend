import React from 'react';
import { withRouter } from 'react-router';
import RecipeCard from '../Components/RecipeCard';
import RecipePage from '../Components/RecipePage';
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../Components/SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}))

class Recipes extends React.Component {
    
    state = {
        recipes: [],
        searchTerm: ''
    }

    getRecipes = (searchTerm='a') => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`)
        .then(r => r.json())
        .then((json) => {
            this.setState({recipes: json.meals})
        })
    }

    componentDidMount = () => {
        this.getRecipes()
    }

    render() {
        return (
            <div>
            <SearchBar searchTerm={this.state.searchTerm} getRecipes={this.getRecipes}/>
            <Grid container direction='space-between' className='grid'>
                {this.state.recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}/>)} 
            </Grid>
            </div>
        )
    }
}

export default withRouter(Recipes)
// container justify='space-evenly'
// {this.state.recipes.map(recipe => <RecipePage recipe={recipe} key={recipe.id}/>)}