import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f06292',
      }
    },
  });

export default function RecipePage(props) {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <div className='gridContainer'>    
                <div className='cardInfo'>
                    <Grid container direction='row' justify='space-evenly'>
                        <Typography className={classes.title}>
                            {props.recipe.strMeal}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {props.recipe.strArea}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {props.recipe.strCategory}
                        </Typography>
                    </Grid>
                </div>
                <div className='recipePageImg'>
                    <img src={props.recipe.strMealThumb} className='recipeImg'/>
                </div>
                <div className='ingAndMeas'>
                    <Typography variant='h5' className={classes.ing}>
                        Ingredients
                    </Typography>
                    <ol>
                        {
                            props.recipe.strIngredient1 && props.recipe.strMeasure1 
                            && 
                            (<li>{props.recipe.strIngredient1} - {props.recipe.strMeasure1}</li>)
                        }{
                            props.recipe.strIngredient2 && props.recipe.strMeasure2
                            &&
                            (<li>{props.recipe.strIngredient2} - {props.recipe.strMeasure2}</li>)
                        }{
                            props.recipe.strIngredient3 && props.recipe.strMeasure3
                            && 
                            (<li>{props.recipe.strIngredient3} - {props.recipe.strMeasure3}</li>)
                        }{
                            props.recipe.strIngredient4 && props.recipe.strMeasure4
                            && 
                            (<li>{props.recipe.strIngredient4} - {props.recipe.strMeasure4}</li>)
                        }{
                            props.recipe.strIngredient5 && props.recipe.strMeasure5
                            && 
                            (<li>{props.recipe.strIngredient5} - {props.recipe.strMeasure5}</li>)
                        }{
                            props.recipe.strIngredient6 && props.recipe.strMeasure6
                            && 
                            (<li>{props.recipe.strIngredient6} - {props.recipe.strMeasure6}</li>)
                        }{
                            props.recipe.strIngredient7 && props.recipe.strMeasure7
                            &&
                            (<li>{props.recipe.strIngredient7} - {props.recipe.strMeasure7}</li>)
                        }{
                            props.recipe.strIngredient8 && props.recipe.strMeasure8
                            && 
                            (<li>{props.recipe.strIngredient8} - {props.recipe.strMeasure8}</li>)
                        }{
                            props.recipe.strIngredient9 && props.recipe.strMeasure9
                            && 
                            (<li>{props.recipe.strIngredient9} - {props.recipe.strMeasure9}</li>)
                        }{
                            props.recipe.strIngredient10 && props.recipe.strMeasure10
                            && 
                            (<li>{props.recipe.strIngredient10} - {props.recipe.strMeasure10}</li>)
                        }{
                            props.recipe.strIngredient11 && props.recipe.strMeasure11
                            && 
                            (<li>{props.recipe.strIngredient11} - {props.recipe.strMeasure11}</li>)
                        }{
                            props.recipe.strIngredient12 && props.recipe.strMeasure12
                            && 
                            (<li>{props.recipe.strIngredient12} - {props.recipe.strMeasure12}</li>)
                        }{
                            props.recipe.strIngredient13 && props.recipe.strMeasure13
                            && 
                            (<li>{props.recipe.strIngredient13} - {props.recipe.strMeasure13}</li>)
                        }{
                            props.recipe.strIngredient14 && props.recipe.strMeasure14
                            && 
                            (<li>{props.recipe.strIngredient14} - {props.recipe.strMeasure14}</li>)
                        }{
                            props.recipe.strIngredient15 && props.recipe.strMeasure15
                            && 
                            (<li>{props.recipe.strIngredient15} - {props.recipe.strMeasure15}</li>)
                        }{
                            props.recipe.strIngredient16 && props.recipe.strMeasure16
                            && 
                            (<li>{props.recipe.strIngredient16} - {props.recipe.strMeasure16}</li>)
                        }{
                            props.recipe.strIngredient17 && props.recipe.strMeasure17
                            && 
                            (<li>{props.recipe.strIngredient17} - {props.recipe.strMeasure17}</li>)
                        }{
                            props.recipe.strIngredient18 && props.recipe.strMeasure18
                            && 
                            (<li>{props.recipe.strIngredient18} - {props.recipe.strMeasure18}</li>)
                        }{
                            props.recipe.strIngredient19 && props.recipe.strMeasure19
                            && 
                            (<li>{props.recipe.strIngredient19} - {props.recipe.strMeasure19}</li>)
                        }{
                            props.recipe.strIngredient20 && props.recipe.strMeasure20
                            && 
                            (<li>{props.recipe.strIngredient20} - {props.recipe.strMeasure20}</li>)
                        }
                    </ol>
                </div>
                <div className='instructions'>
                    <Typography variant='h5'>
                        Instructions
                    </Typography>
                    <Typography variant='paragraph'>
                        {props.recipe.strInstructions}
                    </Typography>
                </div>
                <div className='addOrRemoveCookbookButton'>
                {props.logged_in ? 
                    <Link to='/profile'>
                        <Button onClick={() => props.addRecipeToCookbook(props.recipe)} variant="contained" color="primary">
                        add to my cookbook
                        </Button>
                    </Link>
                    :
                    null
                }
                </div>
            </div>
        </ThemeProvider>
    )
}
