import {withRouter} from 'react-router';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Menu} from 'semantic-ui-react';
import Typography from '@material-ui/core/Typography';

const confirmLogout = () => window.confirm('confirm logout');

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#00cecb',
    // backgroundImage: 'linear-gradient(to right, #00cecb, #33d8d5, #5ce0dd)'
  },
  title1: {
    fontSize: 40,
    color: '#f48fb1',
    paddingLeft: 20
  },
  title2: {
    fontSize: 40,
    color: 'white'
  },
  title3: {
    fontSize: 40,
    color: '#ffc107'
  },
  title4: {
    fontSize: 40,
    color: 'white'
  },
  subtitle: {
    fontSize: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#757575'
  },
  menu: {
    fontSize: 18
  }
}));

function Nav({ logged_in, history }) {
  const classes = useStyles()
  return (
    <div>
      <Grid className={classes.root} container direction="row">
        <Typography variant='h6' className={classes.title1}>
          re
        </Typography>
        <Typography variant='h6' className={classes.title2}>
          mi
        </Typography>
        <Typography variant='h6' className={classes.title3}>
          x
        </Typography>
        <Typography variant='h6' className={classes.title4}>
          cipe
        </Typography>
        <Typography variant='h2' className={classes.subtitle}>
          an online cookbook, for you, by you
        </Typography>
      <div class='ui secondary large menu'>
        <Grid container direction="row">
          <Menu.Item name='recipes' onClick={() => history.push('/recipes')} className={classes.menu}/>
          {!logged_in && (
            <>
              <Menu.Item onClick={() => history.push('/')} name='login' className={classes.menu}/>
              <Menu.Item onClick={() => history.push('/signup')} name='signup' className={classes.menu}/>
            </>
          )}
          {logged_in && (
            <>
              <Menu.Item onClick={() => history.push('/profile')} name='my cookbook' className={classes.menu}/>
              <Menu.Item onClick={() => confirmLogout() && history.push('/logout')} name='logout' className={classes.menu}/>
            </>
          )}
        </Grid>
      </div>
      </Grid>
    </div>
  )
}
  
  export default withRouter(Nav);