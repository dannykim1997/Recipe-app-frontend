import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import RecipesContainer from "./Container/RecipesContainer";
import ProfileContainer from "./Container/ProfileContainer";
import Signup from "./Components/Signup";
import RecipePageContainer from "./Container/RecipePageContainer";
import UserRecipePage from "./Components/UserRecipePage"

class App extends React.Component {
  state = {
    logged_in: false,
    user: {},
  }

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
          <Route path='/recipes'>
            <RecipesContainer/>
          </Route>
          <Route path='/recipe/:id'>
            <RecipePageContainer/>
          </Route>
          <Route path='/myrecipe/:id'>
            <UserRecipePage/>
          </Route>
          <Route
              path="/profile"
              component={() => {
                return this.state.logged_in ? (
                  <ProfileContainer
                    userRecipes={this.state.userRecipes}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
          <Route exact path='/signup' component={Signup}/>
          <Route
              path="/logout"
              component={() => {
                localStorage.clear();
                this.setState({ logged_in: false, token: null });
                return <Redirect to="/login" />;
              }}
            />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
