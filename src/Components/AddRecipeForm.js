import React, { Component } from "react";
import { Form, Segment } from 'semantic-ui-react';

export default class AddRecipeForm extends Component {

    state = {
        name: [],
        image: [],
        category: [],
        instructions: [],
        ingredient1: [],
        ingredient2: [],
        ingredient3: [],
        ingredient4: [],
        ingredient5: [],
        ingredient6: [],
        ingredient7: [],
        ingredient8: [],
        ingredient9: [],
        ingredient10: [],
        ingredient11: [],
        ingredient12: [],
        ingredient13: [],
        ingredient14: [],
        ingredient15: [],
        ingredient16: [],
        ingredient17: [],
        ingredient18: [],
        ingredient19: [],
        ingredient20: [],
        measurement1: [],
        measurement2: [],
        measurement3: [],
        measurement4: [],
        measurement5: [],
        measurement6: [],
        measurement7: [],
        measurement8: [],
        measurement9: [],
        measurement10: [],
        measurement11: [],
        measurement12: [],
        measurement13: [],
        measurement14: [],
        measurement15: [],
        measurement16: [],
        measurement17: [],
        measurement18: [],
        measurement19: [],
        measurement20: [],
        viewForm: false
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitRecipe = (e) => {
        e.preventDefault()
        let recipe = {
            name: this.state.name,
            image: this.state.image,
            category: this.state.category,
            instructions: this.state.instructions,
            ingredient1: this.state.ingredient1,
            ingredient2: this.state.ingredient2,
            ingredient3: this.state.ingredient3,
            ingredient4: this.state.ingredient4,
            ingredient5: this.state.ingredient5,
            ingredient6: this.state.ingredient6,
            ingredient7: this.state.ingredient7,
            ingredient8: this.state.ingredient8,
            ingredient9: this.state.ingredient9,
            ingredient10: this.state.ingredient10,
            ingredient11: this.state.ingredient11,
            ingredient12: this.state.ingredient12,
            ingredient13: this.state.ingredient13,
            ingredient14: this.state.ingredient14,
            ingredient15: this.state.ingredient15,
            ingredient16: this.state.ingredient16,
            ingredient17: this.state.ingredient17,
            ingredient18: this.state.ingredient18,
            ingredient19: this.state.ingredient19,
            ingredient20: this.state.ingredient20,
            measurement1: this.state.measurement1,
            measurement2: this.state.measurement2,
            measurement3: this.state.measurement3,
            measurement4: this.state.measurement4,
            measurement5: this.state.measurement5,
            measurement6: this.state.measurement6,
            measurement7: this.state.measurement7,
            measurement8: this.state.measurement8,
            measurement9: this.state.measurement9,
            measurement10: this.state.measurement10,
            measurement11: this.state.measurement11,
            measurement12: this.state.measurement12,
            measurement13: this.state.measurement13,
            measurement14: this.state.measurement14,
            measurement15: this.state.measurement15,
            measurement16: this.state.measurement16,
            measurement17: this.state.measurement17,
            measurement18: this.state.measurement18,
            measurement19: this.state.measurement19,
            measurement20: this.state.measurement20
        }
        this.props.addUserRecipe(recipe)
    }

    handleViewForm = () => {
        this.setState({viewForm: !this.state.viewForm})
      }

    //   refreshPage() {
    //     window.location.reload();
    //   }

  render() {
    return (
      <div>
          <button onClick={() => this.handleViewForm()}>add recipe</button>
          {this.state.viewForm ? 
          <Form onSubmit={(e) => this.submitRecipe(e)}>
            <label>
                Make a Recipe
                <input onChange={this.handleChange} name="name" placeholder="name"/>
                <input onChange={this.handleChange} name="category" placeholder="category"/>
                <textarea onChange={this.handleChange} name="instructions" placeholder="instructions"/>
                <input onChange={this.handleChange} name="image" placeholder="imageUrl"/>
                
                <input onChange={this.handleChange} name="ingredient1" placeholder="ingredient 1"/>
                <input onChange={this.handleChange} name="measurement1" placeholder="measurement 1"/>

                <input onChange={this.handleChange} name="ingredient2" placeholder="ingredient 2"/>
                <input onChange={this.handleChange} name="measurement2" placeholder="measurement 2"/>

                <input onChange={this.handleChange} name="ingredient3" placeholder="ingredient 3"/>
                <input onChange={this.handleChange} name="measurement3" placeholder="measurement 3"/>

                <input onChange={this.handleChange} name="ingredient4" placeholder="ingredient 4"/>
                <input onChange={this.handleChange} name="measurement4" placeholder="measurement 4"/>

                <input onChange={this.handleChange} name="ingredient5" placeholder="ingredient 5"/>
                <input onChange={this.handleChange} name="measurement5" placeholder="measurement 5"/>

                <input onChange={this.handleChange} name="ingredient6" placeholder="ingredient 6"/>
                <input onChange={this.handleChange} name="measurement6" placeholder="measurement 6"/>

                <input onChange={this.handleChange} name="ingredient7" placeholder="ingredient 7"/>
                <input onChange={this.handleChange} name="measurement7" placeholder="measurement 7"/>

                <input onChange={this.handleChange} name="ingredient8" placeholder="ingredient 8"/>
                <input onChange={this.handleChange} name="measurement8" placeholder="measurement 8"/>

                <input onChange={this.handleChange} name="ingredient9" placeholder="ingredient 9"/>
                <input onChange={this.handleChange} name="measurement9" placeholder="measurement 9"/>

                <input onChange={this.handleChange} name="ingredient10" placeholder="ingredient 10"/>
                <input onChange={this.handleChange} name="measurement10" placeholder="measurement 10"/>

                <input onChange={this.handleChange} name="ingredient11" placeholder="ingredient 11"/>
                <input onChange={this.handleChange} name="measurement11" placeholder="measurement 11"/>

                <input onChange={this.handleChange} name="ingredient12" placeholder="ingredient 12"/>
                <input onChange={this.handleChange} name="measurement12" placeholder="measurement 12"/>

                <input onChange={this.handleChange} name="ingredient13" placeholder="ingredient 13"/>
                <input onChange={this.handleChange} name="measurement13" placeholder="measurement 13"/>

                <input onChange={this.handleChange} name="ingredient14" placeholder="ingredient 14"/>
                <input onChange={this.handleChange} name="measurement14" placeholder="measurement 14"/>

                <input onChange={this.handleChange} name="ingredient15" placeholder="ingredient 15"/>
                <input onChange={this.handleChange} name="measurement15" placeholder="measurement 15"/>

                <input onChange={this.handleChange} name="ingredient16" placeholder="ingredient 16"/>
                <input onChange={this.handleChange} name="measurement16" placeholder="measurement 16"/>

                <input onChange={this.handleChange} name="ingredient17" placeholder="ingredient 17"/>
                <input onChange={this.handleChange} name="measurement17" placeholder="measurement 17"/>

                <input onChange={this.handleChange} name="ingredient18" placeholder="ingredient 18"/>
                <input onChange={this.handleChange} name="measurement18" placeholder="measurement 18"/>

                <input onChange={this.handleChange} name="ingredient19" placeholder="ingredient 19"/>
                <input onChange={this.handleChange} name="measurement19" placeholder="measurement 29"/>

                <input onChange={this.handleChange} name="ingredient20" placeholder="ingredient 20"/>
                <input onChange={this.handleChange} name="measurement20" placeholder="measurement 20"/>
            </label>
            <Form.Button 
            // onClick={this.refreshPage}
            >Submit</Form.Button>
        </Form>
        :
        null
        }
      </div>
    )
  }
}