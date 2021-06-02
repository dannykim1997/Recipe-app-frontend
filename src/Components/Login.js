import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Form, Input} from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/sessions', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ user: {...this.state} })
    })
    .then(r => r.json())
    .then(tokenObj => {
      if(tokenObj.jwt){
      localStorage.setItem('token', tokenObj.jwt)
      localStorage.setItem('username', tokenObj.user.data.attributes.username)
      this.props.handleLogin(tokenObj.jwt)
      this.props.history.push('/recipes')
      }
      else {alert('invalid username or password, please try again')}
    })
  }

    render() {
      return (
        <div className='form-container'>
          <Form onSubmit={this.handleSubmit} className='loginAndSignup'>
            <Form.Field onChange={this.handleInputChange} control={Input} name='username' label='username' placeholder='username'/>
            <Form.Field onChange={this.handleInputChange} control={Input} type='password' name='password' label='password' placeholder='password'/>
            <Button variant='contained' color='secondary' type='submit'>Login</Button>
          </Form>
        </div>
      )
    }
}

export default withRouter(Login);