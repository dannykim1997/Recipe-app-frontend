import React from "react"


const RecipeCard = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.recipe.strMeal}</h2>
            <img src={props.recipe.strMealThumb}/>
            <h1>{props.recipe.strCategory}</h1>
            <h1>{props.recipe.strArea}</h1>
            <h1>{props.recipe.strInstructions}</h1>
            <h1>{props.recipe.strCategory}</h1>
            {/* <h2>{props.recipe.strIngredient}</h2> */}
            {/* <h2>{props.recipe.strMeasure}</h2> */}
        </div>
    )
}

export default RecipeCard