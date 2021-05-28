import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class Signup extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ user: {...this.state} })
    }).then(r => r.json())
    .then(tokenObj => {
        if(tokenObj.jwt){
        localStorage.setItem("token", tokenObj.jwt);
        alert('Signup was successful, please log in.')
        this.props.history.push('/')
        }else{
            alert('Signup failed')
        }
      }
    )
  }

  render(){
    return (
      <Segment className={'form-container'}>
        <Form onSubmit={this.handleSubmit} autocomplete={"off"}>
          <Form.Field>
            <label>Username</label>
            <input name='username' placeholder='Username' onChange={this.handleInputChange} />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' onChange={this.handleInputChange} />
          </Form.Field>
          <Button type='submit' positive>
            Signup
          </Button>
        </Form>
      </Segment>
    )
  }
}

export default withRouter(Signup);