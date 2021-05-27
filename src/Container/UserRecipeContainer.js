import React, {Component} from 'react';
import UserRecipePage from '../Components/UserRecipePage';
import EditRecipeForm from '../Components/EditRecipeForm'

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
    
    editUserRecipe = (recipe) => {
        fetch(`http://localhost:3000/recipes/${this.props.match.params.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify(recipe)
        })
        .then(r => r.json())
        .then((updatedRecipe) => {
            this.setState({
                userRecipe: updatedRecipe.data,
            })
          }
        )
    }

    componentDidMount = () => {
        this.getUserRecipe()
    }

    deleteRecipeHelper = () => {
        let deleteRecipe = this.state.userRecipe
        this.props.deleteUserRecipe(deleteRecipe)
    } 

    // handleViewForm = () => {
    //     this.setState({viewForm: !this.state.viewForm})
    //   }

    render() {
        return (
            <div>
                {/* {!this.props.viewForm ? */}
                <UserRecipePage recipe={this.state.userRecipe} deleteUserRecipe={this.deleteRecipeHelper} editUserRecipe={this.editUserRecipe}
                // handleViewForm={this.handleViewForm}
                />
                {/* && */}
                <EditRecipeForm recipe={this.state.userRecipe} editUserRecipe={this.editUserRecipe} handleRecipeChange={this.handleRecipeChange}
                // viewForm={this.state.viewForm}
                // handleViewForm={this.handleViewForm}
                />
                {/* :
                null
                } */}
            </div>
        )
    }
}

export default UserRecipe