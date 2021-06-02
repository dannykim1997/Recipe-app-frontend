import React, {Component} from 'react';
import {Form, Input, TextArea} from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: '#f06292',
      }
  },
});

export default class EditRecipeForm extends Component {
  state = {
    name: [],
    image: [],
    origin: [],
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
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitEdit = (e) => {
    e.preventDefault()
    const editRecipe = {
      id: this.props.recipe.id,
      name: this.state.name,
      image: this.state.image,
      origin: this.state.origin,
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
    this.props.editUserRecipe(editRecipe)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid className='buttonPadding'>
          <Button onClick={() => this.props.handleEditForm()} variant='contained' color='primary'>remix recipe</Button>
        </Grid>
          {this.props.viewEditForm ?
            <Form onSubmit={(e) => this.submitEdit(e)} className='buttonPadding'>   
              <Form.Group widths='equal'>
                <Form.Field onChange={this.handleChange} control={Input} name='name' placeholder='name'/>
                <Form.Field onChange={this.handleChange} control={Input} name='origin' placeholder='origin'/>
                <Form.Field onChange={this.handleChange} control={Input} name='category' placeholder='category'/>
              </Form.Group>
              <Form.Field onChange={this.handleChange} control={TextArea} name='instructions' placeholder='instructions'/>
              <Form.Field onChange={this.handleChange} control={Input} name='image' placeholder='image url'/>
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient1' placeholder='ingredient 1'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement1' placeholder='measurement 1'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient2' placeholder='ingredient 2'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement2' placeholder='measurement 2'/>
              </Form.Group>        
              <Form.Group widths='equal'>     
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient3' placeholder='ingredient 3'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement3' placeholder='measurement 3'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient4' placeholder='ingredient 4'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement4' placeholder='measurement 4'/>
              </Form.Group>
              <Form.Group widths='equal'> 
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient5' placeholder='ingredient 5'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement5' placeholder='measurement 5'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient6' placeholder='ingredient 6'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement6' placeholder='measurement 6'/>
              </Form.Group>
              
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient7' placeholder='ingredient 7'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement7' placeholder='measurement 7'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient8' placeholder='ingredient 8'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement8' placeholder='measurement 8'/>
              </Form.Group>
              
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient9' placeholder='ingredient 9'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement9' placeholder='measurement 9'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient10' placeholder='ingredient 10'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement10' placeholder='measurement 10'/>
              </Form.Group>
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient11' placeholder='ingredient 11'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement11' placeholder='measurement 11'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient12' placeholder='ingredient 12'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement12' placeholder='measurement 12'/>
              </Form.Group>
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient13' placeholder='ingredient 13'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement13' placeholder='measurement 13'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient14' placeholder='ingredient 14'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement14' placeholder='measurement 14'/>
              </Form.Group>
              
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient15' placeholder='ingredient 15'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement15' placeholder='measurement 15'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient16' placeholder='ingredient 16'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement16' placeholder='measurement 16'/>
              </Form.Group>
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient17' placeholder='ingredient 17'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement17' placeholder='measurement 17'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient18' placeholder='ingredient 18'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement18' placeholder='measurement 18'/>
              </Form.Group>
              <Form.Group widths='equal'>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient19' placeholder='ingredient 19'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement19' placeholder='measurement 19'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='ingredient20' placeholder='ingredient 20'/>
                  <Form.Field onChange={this.handleChange} control={Input} name='measurement20' placeholder='measurement 20'/>
              </Form.Group>
              <Form.Button 
              >Submit</Form.Button>
          </Form>
          :
          null
          }
      </ThemeProvider>
    )
  }
}