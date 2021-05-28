import React from 'react';
import UserRecipeCard from '../Components/UserRecipeCard';
import AddRecipeForm from '../Components/AddRecipeForm'

export default function Profile(props) {
    return (
        <div>
            <h2>My Cookbook</h2>
            {props.userRecipes.map(recipe => <UserRecipeCard recipe={recipe} key={recipe.id}/>)}
            <AddRecipeForm addUserRecipe={props.addUserRecipe}/>
        </div>
    )
}