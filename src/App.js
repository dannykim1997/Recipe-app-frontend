import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import RecipesContainer from "./Container/RecipesContainer";
import ProfileContainer from "./Container/ProfileContainer";
import Signup from "./Components/Signup";
import RecipePageContainer from "./Container/RecipePageContainer";
import UserRecipeContainer from "./Container/UserRecipeContainer";

class App extends React.Component {
  
  state = {
    logged_in: false,
    user: {},
    userRecipes: [],
    recipes: [],
    searchTerm: '',
    // token: null,
    // token: localStorage.getItem('token')
  }

  // handleLogin = (user, token) => {
  //   this.setState({logged_in: true, user: user, token});
  //   this.getUserRecipes()
  // };

  handleLogin = (user) => {
    this.setState({logged_in: true, user: user});
    this.getUserRecipes()
  };

  getRecipes = (searchTerm='b') => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`)
    .then(r => r.json())
    .then((json) => {
      this.setState({recipes: json.meals})
    })
    }

  componentDidMount = () => {
    this.getRecipes()
    // const authToken = localStorage.getItem('token')
    if (localStorage.getItem('jwt')) {
      this.setState({ logged_in: true, token: localStorage.getItem('jwt')})
      this.getUserRecipes()
    }
  }

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
        this.setState({userRecipes: json.data})
      }
    )
  }

  getNewRecipe = (recipe) => {
    fetch('http://localhost:3000/recipes',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(recipe)
    })
    .then(r => r.json())
    .then(recipe => {
        this.setState({userRecipes: [...this.state.userRecipes, recipe.data]})
    })
  }

deleteUserRecipe = (deleteRecipe) => {
  let newState = this.state.userRecipes.filter(recipe => recipe.id !== deleteRecipe.id)
  fetch("http://localhost:3000/recipes/" + deleteRecipe.id,{
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
          <Route path='/recipe/:id' render={(routerProps) => <RecipePageContainer {...routerProps} getNewRecipe={this.getNewRecipe}/>}/>
          <Route path='/myrecipe/:id' render={(routerProps) => <UserRecipeContainer {...routerProps} deleteUserRecipe={this.deleteUserRecipe}
          getUserRecipes={this.getUserRecipes}
          />}/>
          <Route
              path="/profile"
              component={() => {
                return this.state.logged_in ? 
                (<ProfileContainer userRecipes={this.state.userRecipes}/>) 
                : 
                (<Redirect to="/profile" />)
              }}
            />
          <Route exact path='/signup' component={Signup}/>
          <Route
              path="/logout"
              component={() => {
                localStorage.clear();
                this.setState({ logged_in: false });
                return <Redirect to="/" />;
              }}
            />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
