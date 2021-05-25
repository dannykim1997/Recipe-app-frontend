import React, {Component} from 'react';
import RecipePage from '../Components/RecipePage';
import AddToCookbook from '../Components/AddToCookbook'

class RecipePages extends Component {
    
    state = {
        recipe: [],
    }

    getRecipe = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
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
                {this.state.recipe.map(recipe => <AddToCookbook recipe={recipe} key={recipe.id}/>)}
            </div>
        )
    }
}

export default RecipePages