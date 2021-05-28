import React from 'react';
import UserRecipeCard from '../Components/UserRecipeCard';
import AddToCookbookForm from '../Components/AddToCookbookForm';
import ReverseUserRecipeButton from '../Components/ReverseUserRecipeButton'

export default function Profile(props) {
    return (
        <div>
            <h2>My Cookbook</h2>
            <ReverseUserRecipeButton reverseOrder={props.reverseOrder}/>
            {props.userRecipes.map(recipe => <UserRecipeCard recipe={recipe} key={recipe.id}/>)}
            <AddToCookbookForm addUserRecipe={props.addUserRecipe}/>
        </div>
    )
}