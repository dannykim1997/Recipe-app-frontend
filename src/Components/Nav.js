import React from "react";
import { Header, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router';

const confirmLogout = () => window.confirm("Are you sure you want to logout?");

function Nav({ logged_in, history }) {
  return (
    <>
      <div className={'nav-bar-image'} >
        <Header as='h2' icon textAlign='center'>
          <Header.Content>remixcipe</Header.Content>
        </Header>
      </div>

      <Menu secondary>
        <Menu.Item name='recipes' onClick={() => history.push('/recipes')}/>
        {!logged_in && (
          <>
            <Menu.Item onClick={() => history.push('/')} name='login'/>
            <Menu.Item onClick={() => history.push('/signup')} name='signup'/>
          </>
        )}
        {logged_in && (
          <>
            <Menu.Item onClick={() => history.push('/profile')} name='profile'/>
            <Menu.Item onClick={() => confirmLogout() && history.push('/logout')} name='logout'/>
          </>
        )}
      </Menu>
    </>
  )
}
  
  export default withRouter(Nav);