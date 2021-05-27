import React from "react"
import { Card, CardActions, CardHeader, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 200,
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

const RecipeCard = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} component={Link} to={`/recipe/${props.recipe.idMeal}`}>
            <CardMedia className={classes.media} image={`${props.recipe.strMealThumb}`}/>
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

export default RecipeCard
