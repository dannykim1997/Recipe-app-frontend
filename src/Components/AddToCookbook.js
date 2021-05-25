import React, { Component } from "react";
import { Form, Segment, Button } from 'semantic-ui-react';

export default class AddToCookbook extends Component {

    // state = {
    //     recipe: {}
    // }

    addRecipe = () => {
        fetch('http://localhost:3000/recipes',{
            method: 'POST',
            headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({recipe: {
                id: this.props.recipe.idMeal,
                name: this.props.recipe.strMeal,
                category: this.props.recipe.strCategory,
                origin: this.props.recipe.strArea,
                instructions: this.props.recipe.strInstructions,
                ingredients: this.props.recipe.strIngredient1,
                measurements: this.props.recipe.strMeasure1,
                image: this.props.recipe.strMealThumb
            }}
            )
        })
        .then(r => r.json())
        .then(r => console.log(r))
        // .then(resp => {this.props.history.push('/profile')})
        }

        render () {
            // console.log(this.props.recipe.idMeal)
            return (
                <Segment className={'form-container'}>
                    <Form onSubmit={this.addRecipe} autocomplete={"off"}>
                    <Button type='submit' positive>
                        Add to Cookbook
                    </Button>
                    </Form>
                </Segment>
            )
        }
}