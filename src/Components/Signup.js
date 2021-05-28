import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class Signup extends React.Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: ''
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({user: {...this.state}})
    })
    .then(r => r.json())
    .then(tokenObj => {
      if(tokenObj.jwt){
      localStorage.setItem("token", tokenObj.jwt);
      alert('signup was successful, please log in')
      this.props.history.push('/')
      }else{
          alert('signup failed, requires unique username and password minimum of 8 characters')
      }
    })
  }

  render() {
    return (
      <Segment className={'form-container'}>
        <Form onSubmit={this.handleSubmit} autocomplete={"off"}>
          <Form.Field>
            <label>username</label>
            <input name='username' placeholder='username' onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>first name</label>
            <input name='first_name' placeholder='first name' onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>last name</label>
            <input name='last_name' placeholder='last name' onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input type='password' name='password' placeholder='password' onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input type='password' name='password_confirmation' placeholder='confirm password' onChange={this.handleInputChange} />
          </Form.Field>
          <Button type='submit' positive>Signup</Button>
        </Form>
      </Segment>
    )
  }
}

export default withRouter(Signup);