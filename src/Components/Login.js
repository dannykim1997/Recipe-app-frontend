import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";

class Login extends Component {
    state = {
      username: "",
      password: "",
    };

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    handleSubmit = () => {
        fetch('http://localhost:3000/sessions',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({ user: {...this.state} })
        }).then(r => r.json())
        .then(resp => {
            if(resp){
            localStorage.setItem("jwt", resp.jwt);
            this.props.handleLogin(resp)
            this.props.history.push('/recipes')
            }else{
                alert('Login failed')
            }
          }
        )
    }

    render() {
        return (
            <Segment className="form-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              name="username"
              placeholder="Username"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Button variant="contained" color="primary" type='submit'>
            Login
          </Button>

        </Form>
      </Segment>
        )
    }
}

export default withRouter(Login);