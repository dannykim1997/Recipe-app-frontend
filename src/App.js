import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Signup from './Components/Signup';
import RecipePage from './Components/RecipePage';
import UserRecipePage from './Components/UserRecipePage';
import RecipesContainer from './Container/RecipesContainer';
import UserRecipesContainer from './Container/UserRecipesContainer';
import 'semantic-ui-css/semantic.min.css';
import './App.css'

export default class App extends Component {
  state = {
    logged_in: false,
    token: null,
    user: {},
    searchTerm: '',
    recipes: [],
    userRecipes: [],
    viewEditForm: false,
    selection: {}
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
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      })
    .then(r => r.json())
    .then(json => {
      this.setState({userRecipes: json.data})
    })
  }

  componentDidMount = () => {
    this.getRecipes()
    if (localStorage.getItem('token')) {
      this.setState({logged_in: true, token: localStorage.getItem('token')})
      this.getUserRecipes()
    }
  }

  addRecipeToCookbook = (recipe) => {
    console.log(recipe)
    fetch('http://localhost:3000/recipes',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({recipe: {
            name: recipe.strMeal,
            category: recipe.strCategory,
            origin: recipe.strArea,
            instructions: recipe.strInstructions,
            ingredient1: recipe.strIngredient1,
            ingredient2: recipe.strIngredient2,
            ingredient3: recipe.strIngredient3,
            ingredient4: recipe.strIngredient4,
            ingredient5: recipe.strIngredient5,
            ingredient6: recipe.strIngredient6,
            ingredient7: recipe.strIngredient7,
            ingredient8: recipe.strIngredient8,
            ingredient9: recipe.strIngredient9,
            ingredient10: recipe.strIngredient10,
            ingredient11: recipe.strIngredient11,
            ingredient12: recipe.strIngredient12,
            ingredient13: recipe.strIngredient13,
            ingredient14: recipe.strIngredient14,
            ingredient15: recipe.strIngredient15,
            ingredient16: recipe.strIngredient16,
            ingredient17: recipe.strIngredient17,
            ingredient18: recipe.strIngredient18,
            ingredient19: recipe.strIngredient19,
            ingredient20: recipe.strIngredient20,
            measurement1: recipe.strMeasure1,
            measurement2: recipe.strMeasure2,
            measurement3: recipe.strMeasure3,
            measurement4: recipe.strMeasure4,
            measurement5: recipe.strMeasure5,
            measurement6: recipe.strMeasure6,
            measurement7: recipe.strMeasure7,
            measurement8: recipe.strMeasure8,
            measurement9: recipe.strMeasure9,
            measurement10: recipe.strMeasure10,
            measurement11: recipe.strMeasure11,
            measurement12: recipe.strMeasure12,
            measurement13: recipe.strMeasure13,
            measurement14: recipe.strMeasure14,
            measurement15: recipe.strMeasure15,
            measurement16: recipe.strMeasure16,
            measurement17: recipe.strMeasure17,
            measurement18: recipe.strMeasure18,
            measurement19: recipe.strMeasure19,
            measurement20: recipe.strMeasure20,
            image: recipe.strMealThumb
      }})
    })
    .then(r => r.json())
    .then(recipe => {
      this.setState({userRecipes: [...this.state.userRecipes, recipe.data]})
    })
  }

  createUserRecipe = (recipe) => {
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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
    fetch('http://localhost:3000/recipes/' + deleteRecipe.id,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    this.setState({userRecipes: this.state.userRecipes.filter(recipe => recipe !== deleteRecipe)
    })
  }

  handleEditForm = () => {
    this.setState({viewEditForm: !this.state.viewEditForm})
  }

  editUserRecipe = (editRecipe) => {
    fetch(`http://localhost:3000/recipes/` + editRecipe.id, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(editRecipe)
    })
    .then(r => r.json())
    .then((updatedRecipe) => {
      this.setState({
        userRecipes: this.state.userRecipes.map(editRecipe => (editRecipe.id) === (updatedRecipe.data.id) ? updatedRecipe.data : editRecipe),
        viewEditForm: !this.state.viewEditForm
      })
    })
  }
  
  selected = (e) => {
    console.log(this.state.selection)
    console.log(e)
    this.setState({userRecipes: [...this.state.userRecipes.reverse()],
      selection: e
    })
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
            <Nav logged_in={this.state.logged_in}/>
          <Switch>
            <Route exact path='/'>
              <Login logged_in={this.state.logged_in} handleLogin={this.handleLogin} getUserRecipes={this.getUserRecipes}/>
            </Route>
            <Route path='/recipes'>
              <RecipesContainer recipes={this.state.recipes} searchTerm={this.state.searchTerm} getRecipes={this.getRecipes}/>
            </Route>
            <Route path='/recipe/:id' render={(routerProps) => {
              if (this.state.recipes.length > 0) {
                let recipe = this.state.recipes.find(
                  (recipe) => routerProps.match.params.id === recipe.idMeal
                )
                return <RecipePage addRecipeToCookbook={this.addRecipeToCookbook} recipe={recipe} logged_in={this.state.logged_in}
                />
              }
            }}/>
            <Route path='/myrecipe/:id' render={(routerProps) => {
              if (this.state.userRecipes.length > 0 ) {
              let myRecipe = this.state.userRecipes.find(
                (myRecipe) => routerProps.match.params.id === myRecipe.id 
              )
              return <UserRecipePage deleteUserRecipe={this.deleteUserRecipe} recipe={myRecipe} editUserRecipe={this.editUserRecipe}
              viewEditForm={this.state.viewEditForm}
              handleEditForm={this.handleEditForm} 
              />
              }
            }}/>
            <Route
              path='/profile'
              component={() => {
                return this.state.logged_in ? 
                (<UserRecipesContainer userRecipes={this.state.userRecipes} createUserRecipe={this.createUserRecipe} 
                selected={this.selected}
                selection={this.state.selection}
                />) 
                : 
                (<Redirect to='/profile'/>)
              }}
            />
            <Route exact path='/signup' component={Signup}/>
            <Route
              path='/logout'
              component={() => {
                localStorage.clear();
                this.setState({logged_in: false});
                return <Redirect to='/'/>;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}