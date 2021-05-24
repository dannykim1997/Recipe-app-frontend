import React from 'react';
import UserRecipeCard from '../Components/UserRecipeCard'
import UserRecipePage from '../Components/UserRecipePage'

class Profile extends React.Component {
    state = {
        userRecipes: []
      };
    
    getUserRecipes = () => {
        fetch('http://localhost:3000/recipes',{
          method: 'GET',
          headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then(r => r.json())
        .then(json => {
          // console.log(json)
            this.setState({userRecipes: json.data})
          }
        )
    }

    componentDidMount = () => {
        this.getUserRecipes()
    }

    
    render() {
        return (
            <div>
                {this.state.userRecipes.map(recipe => <UserRecipeCard recipe={recipe} key={recipe.id}/>)}
                {this.state.userRecipes.map(recipe => <UserRecipePage recipe={recipe} key={recipe.id}/>)}
            </div>
        )
    }
}

export default Profile