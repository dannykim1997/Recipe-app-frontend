// import React, {Component} from 'react';
import { Card, CardActions, CardHeader, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Segment, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}))

export default function RecipePage(props) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <img src={props.recipe.strMealThumb} className="images" />
            <CardContent>
                <Typography className={classes.title}>
                    {props.recipe.strMeal}
                </Typography>
                <Typography>
                    {props.recipe.strArea} <br/>
                    {props.recipe.strCategory}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant='paragraph'>
                    {props.recipe.strInstructions}
                </Typography>
                <ul>
                    {
                        props.recipe.strMeasure1 && props.recipe.strIngredient1 
                        && 
                        (<li>{props.recipe.strMeasure1} - {props.recipe.strIngredient1}</li>)
                    }{
                        props.recipe.strMeasure2 && props.recipe.strIngredient2
                        &&
                        (<li>{props.recipe.strMeasure2} - {props.recipe.strIngredient2}</li>)
                    }{
                        props.recipe.strMeasure3 && props.recipe.strIngredient3
                        && 
                        (<li>{props.recipe.strMeasure3} - {props.recipe.strIngredient3}</li>)
                    }{
                        props.recipe.strMeasure4 && props.recipe.strIngredient4
                        && 
                        (<li>{props.recipe.strMeasure4} - {props.recipe.strIngredient4}</li>)
                    }{
                        props.recipe.strMeasure5 && props.recipe.strIngredient5
                        && 
                        (<li>{props.recipe.strMeasure5} - {props.recipe.strIngredient5}</li>)
                    }{
                        props.recipe.strMeasure6 && props.recipe.strIngredient6
                        && 
                        (<li>{props.recipe.strMeasure6} - {props.recipe.strIngredient6}</li>)
                    }{
                        props.recipe.strMeasure7 && props.recipe.strIngredient7
                        &&
                        (<li>{props.recipe.strMeasure7} - {props.recipe.strIngredient7}</li>)
                    }{
                        props.recipe.strMeasure8 && props.recipe.strIngredient8
                        && 
                        (<li>{props.recipe.strMeasure8} - {props.recipe.strIngredient8}</li>)
                    }{
                        props.recipe.strMeasure9 && props.recipe.strIngredient9
                        && 
                        (<li>{props.recipe.strMeasure9} - {props.recipe.strIngredient9}</li>)
                    }{
                        props.recipe.strMeasure10 && props.recipe.strIngredient10
                        && 
                        (<li>{props.recipe.strMeasure10} - {props.recipe.strIngredient10}</li>)
                    }{
                        props.recipe.strMeasure11 && props.recipe.strIngredient11
                        && 
                        (<li>{props.recipe.strMeasure11} - {props.recipe.strIngredient11}</li>)
                    }{
                        props.recipe.strMeasure12 && props.recipe.strIngredient12
                        && 
                        (<li>{props.recipe.strMeasure12} - {props.recipe.strIngredient12}</li>)
                    }{
                        props.recipe.strMeasure13 && props.recipe.strIngredient13
                        && 
                        (<li>{props.recipe.strMeasure13} - {props.recipe.strIngredient13}</li>)
                    }{
                        props.recipe.strMeasure14 && props.recipe.strIngredient14
                        && 
                        (<li>{props.recipe.strMeasure14} - {props.recipe.strIngredient14}</li>)
                    }{
                        props.recipe.strMeasure15 && props.recipe.strIngredient15
                        && 
                        (<li>{props.recipe.strMeasure15} - {props.recipe.strIngredient15}</li>)
                    }{
                        props.recipe.strMeasure16 && props.recipe.strIngredient16
                        && 
                        (<li>{props.recipe.strMeasure16} - {props.recipe.strIngredient16}</li>)
                    }{
                        props.recipe.strMeasure17 && props.recipe.strIngredient17
                        && 
                        (<li>{props.recipe.strMeasure17} - {props.recipe.strIngredient17}</li>)
                    }{
                        props.recipe.strMeasure18 && props.recipe.strIngredient18
                        && 
                        (<li>{props.recipe.strMeasure18} - {props.recipe.strIngredient18}</li>)
                    }{
                        props.recipe.strMeasure19 && props.recipe.strIngredient19
                        && 
                        (<li>{props.recipe.strMeasure19} - {props.recipe.strIngredient19}</li>)
                    }{
                        props.recipe.strMeasure20 && props.recipe.strIngredient20
                        && 
                        (<li>{props.recipe.strMeasure20} - {props.recipe.strIngredient20}</li>)
                    }
                </ul>
            </CardContent>
            <Segment className={'form-container'}>
                <Link to="/profile">
                    <Button onClick={() => props.addRecipe()}>
                    Add to Cookbook
                    </Button>
                </Link>
            </Segment>
        </Card>
    )
}
