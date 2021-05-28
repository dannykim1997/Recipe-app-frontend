import React from 'react';
import UserRecipeCard from '../Components/UserRecipeCard';
import AddRecipeForm from '../Components/AddRecipeForm'

class Profile extends React.Component {
    
    render() {
        return (
            <div>
                <h2>My Cookbook</h2>
                {this.props.userRecipes.map(recipe => <UserRecipeCard recipe={recipe} key={recipe.id}/>)}
                <AddRecipeForm addUserRecipe={this.props.addUserRecipe}/>
            </div>
        )
    }
}

export default Profile