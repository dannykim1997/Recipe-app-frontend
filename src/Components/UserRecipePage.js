import {Link} from 'react-router-dom';
import EditRecipeForm from './EditUserRecipeForm';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const confirmRemove = () => window.confirm('remove from my cookbook');

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingTop: 20,
        paddingBottom: 20
    },
    subtitle: {
        fontSize: 15,
        paddingTop: 20,
        paddingBottom: 20
    },
    ing: {
        textAlign: 'center'
    }
}))

export default function UserRecipePage(props) {
    const classes = useStyles()
    return (
        <div>
            <Grid container direction='row' justify='space-evenly'>
                <Grid className='buttonPadding'>
                    <Link to='/profile'>
                        <Button onClick={() => confirmRemove() && props.deleteUserRecipe(props.recipe)} variant="contained">remove from cookbook</Button>
                    </Link>
                </Grid>
                <EditRecipeForm 
                handleEditForm={props.handleEditForm} 
                viewEditForm={props.viewEditForm}
                editUserRecipe={props.editUserRecipe} recipe={props.recipe}/>
            </Grid>
            <div className='gridContainer'>
                <div className='cardInfo'>
                    <Grid container direction='row' justify='space-evenly'>
                        <Typography className={classes.title}>
                            {props.recipe.attributes.name}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {props.recipe.attributes.origin}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {props.recipe.attributes.category}
                        </Typography>
                    </Grid>
                </div>
                <div className='recipePageImg'>
                    <img src={props.recipe.attributes.image} className='recipeImg'/>
                </div>
                <div className='ingAndMeas'>
                    <Typography variant='h5' className={classes.ing}>
                        Ingredients
                    </Typography>
                    <ol>
                        {
                            props.recipe.attributes.ingredient1 && props.recipe.attributes.measurement1 
                            && 
                            (<li>{props.recipe.attributes.ingredient1} - {props.recipe.attributes.measurement1}</li>)
                        }{
                            props.recipe.attributes.ingredient2 && props.recipe.attributes.measurement2
                            &&
                            (<li>{props.recipe.attributes.ingredient2} - {props.recipe.attributes.measurement2}</li>)
                        }{
                            props.recipe.attributes.ingredient3 && props.recipe.attributes.measurement3
                            && 
                            (<li>{props.recipe.attributes.ingredient3} - {props.recipe.attributes.measurement3}</li>)
                        }{
                            props.recipe.attributes.ingredient4 && props.recipe.attributes.measurement4
                            && 
                            (<li>{props.recipe.attributes.ingredient4} - {props.recipe.attributes.measurement4}</li>)
                        }{
                            props.recipe.attributes.ingredient5 && props.recipe.attributes.measurement5
                            && 
                            (<li>{props.recipe.attributes.ingredient5} - {props.recipe.attributes.measurement5}</li>)
                        }{
                            props.recipe.attributes.ingredient6 && props.recipe.attributes.measurement6
                            && 
                            (<li>{props.recipe.attributes.ingredient6} - {props.recipe.attributes.measurement6}</li>)
                        }{
                            props.recipe.attributes.ingredient7 && props.recipe.attributes.measurement7
                            &&
                            (<li>{props.recipe.attributes.ingredient7} - {props.recipe.attributes.measurement7}</li>)
                        }{
                            props.recipe.attributes.ingredient8 && props.recipe.attributes.measurement8
                            && 
                            (<li>{props.recipe.attributes.ingredient8} - {props.recipe.attributes.measurement8}</li>)
                        }{
                            props.recipe.attributes.ingredient9 && props.recipe.attributes.measurement9
                            && 
                            (<li>{props.recipe.attributes.ingredient9} - {props.recipe.attributes.measurement9}</li>)
                        }{
                            props.recipe.attributes.ingredient10 && props.recipe.attributes.measurement10
                            && 
                            (<li>{props.recipe.attributes.ingredient10} - {props.recipe.attributes.measurement10}</li>)
                        }{
                            props.recipe.attributes.ingredient11 && props.recipe.attributes.measurement11
                            && 
                            (<li>{props.recipe.attributes.ingredient11} - {props.recipe.attributes.measurement11}</li>)
                        }{
                            props.recipe.attributes.ingredient12 && props.recipe.attributes.measurement12
                            && 
                            (<li>{props.recipe.attributes.ingredient12} - {props.recipe.attributes.measurement12}</li>)
                        }{
                            props.recipe.attributes.ingredient13 && props.recipe.attributes.measurement13
                            && 
                            (<li>{props.recipe.attributes.ingredient13} - {props.recipe.attributes.measurement13}</li>)
                        }{
                            props.recipe.attributes.ingredient14 && props.recipe.attributes.measurement14
                            && 
                            (<li>{props.recipe.attributes.ingredient14} - {props.recipe.attributes.measurement14}</li>)
                        }{
                            props.recipe.attributes.ingredient15 && props.recipe.attributes.measurement15
                            && 
                            (<li>{props.recipe.attributes.ingredient15} - {props.recipe.attributes.measurement15}</li>)
                        }{
                            props.recipe.attributes.ingredient16 && props.recipe.attributes.measurement16
                            && 
                            (<li>{props.recipe.attributes.ingredient16} - {props.recipe.attributes.measurement16}</li>)
                        }{
                            props.recipe.attributes.ingredient17 && props.recipe.attributes.measurement17
                            && 
                            (<li>{props.recipe.attributes.ingredient17} - {props.recipe.attributes.measurement17}</li>)
                        }{
                            props.recipe.attributes.ingredient18 && props.recipe.attributes.measurement18
                            && 
                            (<li>{props.recipe.attributes.ingredient18} - {props.recipe.attributes.measurement18}</li>)
                        }{
                            props.recipe.attributes.ingredient19 && props.recipe.attributes.measurement19
                            && 
                            (<li>{props.recipe.attributes.ingredient19} - {props.recipe.attributes.measurement19}</li>)
                        }{
                            props.recipe.attributes.ingredient20 && props.recipe.attributes.measurement20
                            && 
                            (<li>{props.recipe.attributes.ingredient20} - {props.recipe.attributes.measurement20}</li>)
                        }
                    </ol>
                </div>
                <div className='instructions'>
                    <Typography variant='h5'>
                        Instructions
                    </Typography>
                    <Typography variant='paragraph'>
                        {props.recipe.attributes.instructions}
                    </Typography>
                </div>
            </div>
        </div>
    )
}