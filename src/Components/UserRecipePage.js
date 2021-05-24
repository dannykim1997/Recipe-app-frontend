import React from "react"
import { Card, CardActions, CardHeader, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}))

const UserRecipeCard = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <img src={props.recipe.attributes.image} className="images" />
            <CardContent>
                <Typography className={classes.title}>
                    {props.recipe.attributes.name}
                </Typography>
                <Typography>
                    {props.recipe.attributes.origin} <br />
                    {props.recipe.attributes.category}
                </Typography>
            </CardContent>
            <div>
                {props.recipe.attributes.ingredients.split("|")} - {props.recipe.attributes.measurements.split("|")}
            </div>
            <div>
                {props.recipe.attributes.instructions}
            </div>
        </Card>
    )
}

export default UserRecipeCard