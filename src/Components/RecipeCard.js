import {Link} from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        margin: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    media: {
        height: 140
    }
}))

export default function RecipeCard(props) {
    const classes = useStyles()
    return (
        <Card component={Link} to={`/recipe/${props.recipe.idMeal}`}  className={classes.root}>
            <CardMedia image={`${props.recipe.strMealThumb}`} className={classes.media}/>
            <CardContent>
                <Typography className={classes.title}>
                    {props.recipe.strMeal}
                </Typography>
                <Typography>
                    {props.recipe.strArea} <br/>
                    {props.recipe.strCategory}
                </Typography>
            </CardContent>
        </Card>
    )
}