import React, {Component} from 'react';
import RecipePage from '../Components/RecipePage';

class RecipePages extends Component {
    state = {
        recipe: [],
    }

    getRecipe = (id) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(r => r.json())
        .then((json) => {
            this.setState({recipe: json.meals})
        })
    }

    componentDidMount = () => {
        this.getRecipe()
    }

    render() {
        return (
            <div>
                {this.state.recipe.map(recipe => <RecipePage recipe={recipe} key={recipe.id}/>)}
            </div>
        )
    }
}

export default RecipePages