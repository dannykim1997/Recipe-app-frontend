import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import RecipesContainer from "./Container/RecipesContainer";
import UserRecipesContainer from "./Container/UserRecipesContainer";
import Signup from "./Components/Signup";
import RecipePageContainer from "./Container/RecipePageContainer";
import UserRecipePageContainer from "./Container/UserRecipePageContainer";

export default class App extends React.Component {
  state = {
    logged_in: false,
    user: {},
    userRecipes: [],
    recipes: [],
    searchTerm: '',
    token: null,
  }

  handleLogin = (user, token) => {
    this.setState({logged_in: true, user: user, token});
    this.getUserRecipes()
  };

  getRecipes = (searchTerm='r') => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`)
    .then(r => r.json())
    .then((json) => {
      this.setState({recipes: json.meals})
    })
  }
    
  getUserRecipes = () => {
    fetch('http://localhost:3000/recipes',{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      })
    .then(r => r.json())
    .then(json => {
      this.setState({userRecipes: json.data})
    })
  }

  reverseUserRecipes = () => {
      this.setState({userRecipes: [...this.state.userRecipes.reverse()]})
  }

  componentDidMount = () => {
    this.getRecipes()
    if (localStorage.getItem('token')) {
      this.setState({logged_in: true, token: localStorage.getItem('token')})
      this.getUserRecipes()
    }
  }

  getNewRecipe = (recipe) => {
    fetch('http://localhost:3000/recipes',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(recipe)
    })
    .then(r => r.json())
    .then(recipe => {
      this.setState({userRecipes: [...this.state.userRecipes, recipe.data]})
    })
  }

  addUserRecipe = (recipe) => {
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({recipe: {
        name: recipe.name,
        category: recipe.category,
        origin: recipe.origin,
        instructions: recipe.instructions,
        ingredient1: recipe.ingredient1,
        ingredient2: recipe.ingredient2,
        ingredient3: recipe.ingredient3,
        ingredient4: recipe.ingredient4,
        ingredient5: recipe.ingredient5,
        ingredient6: recipe.ingredient6,
        ingredient7: recipe.ingredient7,
        ingredient8: recipe.ingredient8,
        ingredient9: recipe.ingredient9,
        ingredient10: recipe.ingredient10,
        ingredient11: recipe.ingredient11,
        ingredient12: recipe.ingredient12,
        ingredient13: recipe.ingredient13,
        ingredient14: recipe.ingredient14,
        ingredient15: recipe.ingredient15,
        ingredient16: recipe.ingredient16,
        ingredient17: recipe.ingredient17,
        ingredient18: recipe.ingredient18,
        ingredient19: recipe.ingredient19,
        ingredient20: recipe.ingredient20,
        measurement1: recipe.measurement1,
        measurement2: recipe.measurement2,
        measurement3: recipe.measurement3,
        measurement4: recipe.measurement4,
        measurement5: recipe.measurement5,
        measurement6: recipe.measurement6,
        measurement7: recipe.measurement7,
        measurement8: recipe.measurement8,
        measurement9: recipe.measurement9,
        measurement10: recipe.measurement10,
        measurement11: recipe.measurement11,
        measurement12: recipe.measurement12,
        measurement13: recipe.measurement13,
        measurement14: recipe.measurement14,
        measurement15: recipe.measurement15,
        measurement16: recipe.measurement16,
        measurement17: recipe.measurement17,
        measurement18: recipe.measurement18,
        measurement19: recipe.measurement19,
        measurement20: recipe.measurement20,
        image: recipe.image
      }})
    })
    .then(r => r.json())
    .then((recipe) => {
      this.setState({userRecipes: [...this.state.userRecipes, recipe.data]})
    })
  }

  deleteUserRecipe = (deleteRecipe) => {
    let newState = this.state.userRecipes.filter(recipe => recipe.id !== deleteRecipe.id)
    fetch("http://localhost:3000/recipes/" + deleteRecipe.id,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    this.setState({userRecipes: newState})
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Nav logged_in={this.state.logged_in}/>
          <Switch>
            <Route exact path="/">
              <Login logged_in={this.state.logged_in} handleLogin={this.handleLogin} getUserRecipes={this.getUserRecipes}/>
            </Route>
            <Route path='/recipes'>
              <RecipesContainer recipes={this.state.recipes} searchTerm={this.state.searchTerm} getRecipes={this.getRecipes}/>
            </Route>
            <Route path='/recipe/:id' render={(routerProps) => <RecipePageContainer logged_in={this.state.logged_in} {...routerProps} getNewRecipe={this.getNewRecipe}/> }/>
            <Route path='/myrecipe/:id' render={(routerProps) => <UserRecipePageContainer {...routerProps} deleteUserRecipe={this.deleteUserRecipe} getUserRecipes={this.getUserRecipes} userRecipes={this.state.userRecipes}/>}/>
            <Route
              path="/profile"
              component={() => {
                return this.state.logged_in ? 
                (<UserRecipesContainer userRecipes={this.state.userRecipes} addUserRecipe={this.addUserRecipe} reverseOrder={this.reverseUserRecipes}/>) 
                : 
                (<Redirect to="/profile" />)
              }}
            />
            <Route exact path='/signup' component={Signup}/>
            <Route
              path="/logout"
              component={() => {
                localStorage.clear();
                this.setState({logged_in: false});
                return <Redirect to="/"/>;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}