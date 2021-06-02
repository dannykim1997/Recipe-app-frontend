import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Form, Input} from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

class Signup extends Component {
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
      if(tokenObj.jwt){      localStorage.setItem('token', tokenObj.jwt);
      alert('signup was successful, please log in')
      this.props.history.push('/')
      }else{
          alert('signup failed, requires unique username and password minimum of 8 characters')
      }
    })
  }

  render() {
    return (
      <div className='form-container'>        
      <Form onSubmit={this.handleSubmit} autocomplete={'off'} className='loginAndSignup'>
          <Form.Field>
            <label>username</label>
            <input name='username' placeholder='username' onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Field onChange={this.handleInputChange} control={Input} name='first_name' label='first name' placeholder='first name'/>
            <Form.Field onChange={this.handleInputChange} control={Input} name='last_name' label='last name' placeholder='last name'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field onChange={this.handleInputChange} control={Input} type='password' name='password' label='password' placeholder='password'/>
            <Form.Field onChange={this.handleInputChange} control={Input} type='password' name='password_confirmation' label='confirm password' placeholder='confirm password'/>
          </Form.Group>
          <Button variant='contained' color='primary' type='submit' positive>Signup</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(Signup);