import SearchBar from '../Components/SearchBar';
import RecipeCard from '../Components/RecipeCard';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center'
    },
}))

export default function Recipes(props) {
    const classes = useStyles()
    return (
        <div>
            <SearchBar searchTerm={props.searchTerm} getRecipes={props.getRecipes}/>
            <Grid container direction='row' className={classes.root}>
                {props.recipes ? 
                    props.recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}/>) 
                    : 
                    <h2>no recipes</h2>
                }
            </Grid>
        </div>
    )
}