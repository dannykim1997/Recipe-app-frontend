import React, {Component} from 'react';
import UserRecipePage from '../Components/UserRecipePage';

class UserRecipe extends Component {
    
    state = {
        userRecipe: [],
    }

    getUserRecipe = () => {
        fetch(`http://localhost:3000/recipes/${this.props.match.params.id}`,{
          method: 'GET',
          headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then(r => r.json())
        .then(json => {
            this.setState({userRecipe: json.data})
          }
        )
    }

    componentDidMount = () => {
        this.getUserRecipe()
    }

    render() {
        return (
            <div>
                <UserRecipePage recipe={this.state.userRecipe}/>
            </div>
        )
    }
}

export default UserRecipe