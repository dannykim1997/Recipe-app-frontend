import React, {Component} from 'react';
import RecipePage from '../Components/RecipePage';

export default class RecipePages extends Component { 
    state = {
        recipe: {},
    }

    getRecipe = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
        .then(r => r.json())
        .then((json) => {
            this.setState({recipe: json.meals[0]})
        })
    }

    componentDidMount = () => {
        this.getRecipe()
    }
    
    addRecipeHelper = () => {
        let newRecipe = {recipe: {
            id: this.state.recipe.idMeal,
            name: this.state.recipe.strMeal,
            category: this.state.recipe.strCategory,
            origin: this.state.recipe.strArea,
            instructions: this.state.recipe.strInstructions,
            ingredient1: this.state.recipe.strIngredient1,
            ingredient2: this.state.recipe.strIngredient2,
            ingredient3: this.state.recipe.strIngredient3,
            ingredient4: this.state.recipe.strIngredient4,
            ingredient5: this.state.recipe.strIngredient5,
            ingredient6: this.state.recipe.strIngredient6,
            ingredient7: this.state.recipe.strIngredient7,
            ingredient8: this.state.recipe.strIngredient8,
            ingredient9: this.state.recipe.strIngredient9,
            ingredient10: this.state.recipe.strIngredient10,
            ingredient11: this.state.recipe.strIngredient11,
            ingredient12: this.state.recipe.strIngredient12,
            ingredient13: this.state.recipe.strIngredient13,
            ingredient14: this.state.recipe.strIngredient14,
            ingredient15: this.state.recipe.strIngredient15,
            ingredient16: this.state.recipe.strIngredient16,
            ingredient17: this.state.recipe.strIngredient17,
            ingredient18: this.state.recipe.strIngredient18,
            ingredient19: this.state.recipe.strIngredient19,
            ingredient20: this.state.recipe.strIngredient20,
            measurement1: this.state.recipe.strMeasure1,
            measurement2: this.state.recipe.strMeasure2,
            measurement3: this.state.recipe.strMeasure3,
            measurement4: this.state.recipe.strMeasure4,
            measurement5: this.state.recipe.strMeasure5,
            measurement6: this.state.recipe.strMeasure6,
            measurement7: this.state.recipe.strMeasure7,
            measurement8: this.state.recipe.strMeasure8,
            measurement9: this.state.recipe.strMeasure9,
            measurement10: this.state.recipe.strMeasure10,
            measurement11: this.state.recipe.strMeasure11,
            measurement12: this.state.recipe.strMeasure12,
            measurement13: this.state.recipe.strMeasure13,
            measurement14: this.state.recipe.strMeasure14,
            measurement15: this.state.recipe.strMeasure15,
            measurement16: this.state.recipe.strMeasure16,
            measurement17: this.state.recipe.strMeasure17,
            measurement18: this.state.recipe.strMeasure18,
            measurement19: this.state.recipe.strMeasure19,
            measurement20: this.state.recipe.strMeasure20,
            image: this.state.recipe.strMealThumb
        }}
        this.props.getNewRecipe(newRecipe)
    }

    render() {
        return (
            <div>
                <RecipePage recipe={this.state.recipe} addRecipe={this.addRecipeHelper} logged_in={this.props.logged_in}/>
            </div>
        )
    }
}