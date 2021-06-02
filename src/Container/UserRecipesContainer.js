import UserRecipeCard from '../Components/UserRecipeCard';
import CreateUserRecipeForm from '../Components/CreateUserRecipeForm';
import SortForm from '../Components/SortForm';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        padding: 20,
    }, 
}))

export default function Profile(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h5'>{localStorage.username}'s cookbook</Typography>
            <Grid container direction='row' justify='space-evenly'>
                <CreateUserRecipeForm createUserRecipe={props.createUserRecipe}/>
                <SortForm selected={props.selected} selection={props.selection}/>
            </Grid>
            <Grid container direction='row' className={classes.root}>
            {props.userRecipes.length > 0 ?
                props.userRecipes.map(recipe => <UserRecipeCard recipe={recipe} key={recipe.id}/>)
                :
                <Typography variant='h3'>Cookbook is empty</Typography>
            }
            </Grid>
        </div>
    )
}