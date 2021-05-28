import React from "react"
import { Card, CardActions, CardHeader, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Form, Segment, Button } from 'semantic-ui-react';
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

const confirmRemove = () => window.confirm("remove from my cookbook");

export default function UserRecipePage(props) {
    const classes = useStyles()
    return (
        <div>
            {props.recipe.attributes ?
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
                        {props.recipe.attributes.instructions}
                    </div>
                    <ul>
                        {
                            props.recipe.attributes.measurement1 && props.recipe.attributes.ingredient1 
                            && 
                            (<li>{props.recipe.attributes.measurement1} - {props.recipe.attributes.ingredient1}</li>)
                        }{
                            props.recipe.attributes.measurement2 && props.recipe.attributes.ingredient2
                            &&
                            (<li>{props.recipe.attributes.measurement2} - {props.recipe.attributes.ingredient2}</li>)
                        }{
                            props.recipe.attributes.measurement3 && props.recipe.attributes.ingredient3
                            && 
                            (<li>{props.recipe.attributes.measurement3} - {props.recipe.attributes.ingredient3}</li>)
                        }{
                            props.recipe.attributes.measurement4 && props.recipe.attributes.ingredient4
                            && 
                            (<li>{props.recipe.attributes.measurement4} - {props.recipe.attributes.ingredient4}</li>)
                        }{
                            props.recipe.attributes.measurement5 && props.recipe.attributes.ingredient5
                            && 
                            (<li>{props.recipe.attributes.measurement5} - {props.recipe.attributes.ingredient5}</li>)
                        }{
                            props.recipe.attributes.measurement6 && props.recipe.attributes.ingredient6
                            && 
                            (<li>{props.recipe.attributes.measurement6} - {props.recipe.attributes.ingredient6}</li>)
                        }{
                            props.recipe.attributes.measurement7 && props.recipe.attributes.ingredient7
                            &&
                            (<li>{props.recipe.attributes.measurement7} - {props.recipe.attributes.ingredient7}</li>)
                        }{
                            props.recipe.attributes.measurement8 && props.recipe.attributes.ingredient8
                            && 
                            (<li>{props.recipe.attributes.measurement8} - {props.recipe.attributes.ingredient8}</li>)
                        }{
                            props.recipe.attributes.measurement9 && props.recipe.attributes.ingredient9
                            && 
                            (<li>{props.recipe.attributes.measurement9} - {props.recipe.attributes.ingredient9}</li>)
                        }{
                            props.recipe.attributes.measurement10 && props.recipe.attributes.ingredient10
                            && 
                            (<li>{props.recipe.attributes.measurement10} - {props.recipe.attributes.ingredient10}</li>)
                        }{
                            props.recipe.attributes.measurement11 && props.recipe.attributes.ingredient11
                            && 
                            (<li>{props.recipe.attributes.measurement11} - {props.recipe.attributes.ingredient11}</li>)
                        }{
                            props.recipe.attributes.measurement12 && props.recipe.attributes.ingredient12
                            && 
                            (<li>{props.recipe.attributes.measurement12} - {props.recipe.attributes.ingredient12}</li>)
                        }{
                            props.recipe.attributes.measurement13 && props.recipe.attributes.ingredient13
                            && 
                            (<li>{props.recipe.attributes.measurement13} - {props.recipe.attributes.ingredient13}</li>)
                        }{
                            props.recipe.attributes.measurement14 && props.recipe.attributes.ingredient14
                            && 
                            (<li>{props.recipe.attributes.measurement14} - {props.recipe.attributes.ingredient14}</li>)
                        }{
                            props.recipe.attributes.measurement15 && props.recipe.attributes.ingredient15
                            && 
                            (<li>{props.recipe.attributes.measurement15} - {props.recipe.attributes.ingredient15}</li>)
                        }{
                            props.recipe.attributes.measurement16 && props.recipe.attributes.ingredient16
                            && 
                            (<li>{props.recipe.attributes.measurement16} - {props.recipe.attributes.ingredient16}</li>)
                        }{
                            props.recipe.attributes.measurement17 && props.recipe.attributes.ingredient17
                            && 
                            (<li>{props.recipe.attributes.measurement17} - {props.recipe.attributes.ingredient17}</li>)
                        }{
                            props.recipe.attributes.measurement18 && props.recipe.attributes.ingredient18
                            && 
                            (<li>{props.recipe.attributes.measurement18} - {props.recipe.attributes.ingredient18}</li>)
                        }{
                            props.recipe.attributes.measurement19 && props.recipe.attributes.ingredient19
                            && 
                            (<li>{props.recipe.attributes.measurement19} - {props.recipe.attributes.ingredient19}</li>)
                        }{
                            props.recipe.attributes.measurement20 && props.recipe.attributes.ingredient20
                            && 
                            (<li>{props.recipe.attributes.measurement20} - {props.recipe.attributes.ingredient20}</li>)
                        }
                    </ul>
                </Card>
                :
                null
            }
            <Segment className={'form-container'}>
                <Link to="/profile">
                    <Button onClick={() => confirmRemove() && props.deleteUserRecipe()}>delete</Button>
                </Link>
            </Segment>
        </div>
    )
}