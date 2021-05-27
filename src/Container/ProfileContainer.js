import React from 'react';
import UserRecipeCard from '../Components/UserRecipeCard';

class Profile extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.userRecipes.map(recipe => <UserRecipeCard recipe={recipe} key={recipe.id}/>)}
            </div>
        )
    }
}

export default Profile