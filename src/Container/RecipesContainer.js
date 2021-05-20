import React from 'react';
import { withRouter } from 'react-router';
import RecipeCard from '../Components/RecipeCard'
import "semantic-ui-css/semantic.min.css";

class Recipes extends React.Component {
    state = {
        recipes: []
    }

    getRecipes = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
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
                {this.state.recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}/>)}
            </div>
        )
    }
}

export default withRouter(Recipes)
