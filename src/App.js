import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import RecipesContainer from "./Container/RecipesContainer";

class App extends React.Component {
  state = {
    logged_in: false,
    user: {},
    // recipes: []
  }

  // getRecipes = () => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
  //   .then(r => r.json())
  //   .then((json) => {
  //       this.setState({recipes: json.meals})
  //   })
  // }

  // componentDidMount = () => {
  //     this.getRecipes()
  // }

  handleLogin = (user) => {
    this.setState({logged_in: true, user: user});
  };

  render() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
        <Switch>
          <Route exact path="/login">
            <Login logged_in={this.state.logged_in} handleLogin={this.handleLogin}/>
          </Route>
          <Route exact path='/recipes'>
            <RecipesContainer 
            // allrecipes={this.state.recipes}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
