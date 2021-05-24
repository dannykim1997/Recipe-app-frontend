import React, {Component} from 'react';
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

const RecipePage = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <img src={props.recipe.strMealThumb} className="images" />
            <CardContent>
                <Typography className={classes.title}>
                    {props.recipe.strMeal}
                </Typography>
                <Typography>
                    {props.recipe.strArea} <br />
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
                        && (
                            <li>
                                {props.recipe.strMeasure1} - {props.recipe.strIngredient1}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure2 && props.recipe.strIngredient2
                        && (
                            <li>
                                {props.recipe.strMeasure2} - {props.recipe.strIngredient2}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure3 && props.recipe.strIngredient3
                        && (
                            <li>
                                {props.recipe.strMeasure3} - {props.recipe.strIngredient3}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure4 && props.recipe.strIngredient4
                        && (
                            <li>
                                {props.recipe.strMeasure4} - {props.recipe.strIngredient4}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure5 && props.recipe.strIngredient5
                        && (
                            <li>
                                {props.recipe.strMeasure5} - {props.recipe.strIngredient5}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure6 && props.recipe.strIngredient6
                        && (
                            <li>
                                {props.recipe.strMeasure6} - {props.recipe.strIngredient6}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure7 && props.recipe.strIngredient7
                        && (
                            <li>
                                {props.recipe.strMeasure7} - {props.recipe.strIngredient7}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure8 && props.recipe.strIngredient8
                        && (
                            <li>
                                {props.recipe.strMeasure8} - {props.recipe.strIngredient8}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure9 && props.recipe.strIngredient9
                        && (
                            <li>
                                {props.recipe.strMeasure9} - {props.recipe.strIngredient9}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure10 && props.recipe.strIngredient10
                        && (
                            <li>
                                {props.recipe.strMeasure10} - {props.recipe.strIngredient10}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure11 && props.recipe.strIngredient11
                        && (
                            <li>
                                {props.recipe.strMeasure11} - {props.recipe.strIngredient11}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure12 && props.recipe.strIngredient12
                        && (
                            <li>
                                {props.recipe.strMeasure12} - {props.recipe.strIngredient12}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure13 && props.recipe.strIngredient13
                        && (
                            <li>
                                {props.recipe.strMeasure13} - {props.recipe.strIngredient13}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure14 && props.recipe.strIngredient14
                        && (
                            <li>
                                {props.recipe.strMeasure14} - {props.recipe.strIngredient14}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure15 && props.recipe.strIngredient15
                        && (
                            <li>
                                {props.recipe.strMeasure15} - {props.recipe.strIngredient15}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure16 && props.recipe.strIngredient16
                        && (
                            <li>
                                {props.recipe.strMeasure16} - {props.recipe.strIngredient16}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure17 && props.recipe.strIngredient17
                        && (
                            <li>
                                {props.recipe.strMeasure17} - {props.recipe.strIngredient17}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure18 && props.recipe.strIngredient18
                        && (
                            <li>
                                {props.recipe.strMeasure18} - {props.recipe.strIngredient18}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure19 && props.recipe.strIngredient19
                        && (
                            <li>
                                {props.recipe.strMeasure19} - {props.recipe.strIngredient19}
                            </li>
                        )
                    }
                    {
                        props.recipe.strMeasure20 && props.recipe.strIngredient20
                        && (
                            <li>
                                {props.recipe.strMeasure20} - {props.recipe.strIngredient20}
                            </li>
                        )
                    }
                </ul>
            </CardContent>
        </Card>
    )
}

export default RecipePage


// class RecipePage extends Component {
//     state = {
//         recipe: []
//     }

//     getRecipe = () => {
//         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=53053`)
//         .then(r => r.json())
//         .then((json) => {
//             this.setState({recipe: json.meals})
//         })
//     }

//     componentDidMount = () => {
//         this.getRecipe()
//     }

//     render() {
//         console.log(this.state.recipe)
//         return (
//             <div>
//                 <img src={this.state.recipe.map(rec => rec.strMealThumb)}/>
//                 <h2>{this.state.recipe.map(rec => rec.strMeal)}</h2>
//                 <h2>{this.state.recipe.map(rec => rec.strArea)}</h2>
//                 <h2>{this.state.recipe.map(rec => rec.strCategory)}</h2>
//                 <h2>{this.state.recipe.map(rec => rec.strInstructions)}</h2>
//                 <ul>
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure1) && this.state.recipe.map(rec => rec.strIngredient1)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure1)} - {this.state.recipe.map(rec => rec.strIngredient1)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure2) && this.state.recipe.map(rec => rec.strIngredient2)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure2)} - {this.state.recipe.map(rec => rec.strIngredient2)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure3) && this.state.recipe.map(rec => rec.strIngredient3)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure3)} - {this.state.recipe.map(rec => rec.strIngredient3)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure4) && this.state.recipe.map(rec => rec.strIngredient4)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure4)} - {this.state.recipe.map(rec => rec.strIngredient4)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure5) && this.state.recipe.map(rec => rec.strIngredient5)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure5)} - {this.state.recipe.map(rec => rec.strIngredient5)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure6) && this.state.recipe.map(rec => rec.strIngredient6)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure6)} - {this.state.recipe.map(rec => rec.strIngredient6)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure7) && this.state.recipe.map(rec => rec.strIngredient7)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure7)} - {this.state.recipe.map(rec => rec.strIngredient7)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure8) && this.state.recipe.map(rec => rec.strIngredient8)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure8)} - {this.state.recipe.map(rec => rec.strIngredient8)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure9) && this.state.recipe.map(rec => rec.strIngredient9)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure9)} - {this.state.recipe.map(rec => rec.strIngredient9)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure10) && this.state.recipe.map(rec => rec.strIngredient10)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure10)} - {this.state.recipe.map(rec => rec.strIngredient10)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure11) && this.state.recipe.map(rec => rec.strIngredient11)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure11)} - {this.state.recipe.map(rec => rec.strIngredient11)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure12) && this.state.recipe.map(rec => rec.strIngredient12)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure12)} - {this.state.recipe.map(rec => rec.strIngredient12)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure13) && this.state.recipe.map(rec => rec.strIngredient13)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure13)} - {this.state.recipe.map(rec => rec.strIngredient13)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure14) && this.state.recipe.map(rec => rec.strIngredient14)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure14)} - {this.state.recipe.map(rec => rec.strIngredient14)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure15) && this.state.recipe.map(rec => rec.strIngredient15)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure15)} - {this.state.recipe.map(rec => rec.strIngredient15)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure16) && this.state.recipe.map(rec => rec.strIngredient16)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure16)} - {this.state.recipe.map(rec => rec.strIngredient16)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure17) && this.state.recipe.map(rec => rec.strIngredient17)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure17)} - {this.state.recipe.map(rec => rec.strIngredient17)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure18) && this.state.recipe.map(rec => rec.strIngredient18)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure18)} - {this.state.recipe.map(rec => rec.strIngredient18)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure19) && this.state.recipe.map(rec => rec.strIngredient19)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure19)} - {this.state.recipe.map(rec => rec.strIngredient19)}
//                             </li>
//                         )
//                     }
//                     {
//                         this.state.recipe.map(rec => rec.strMeasure20) && this.state.recipe.map(rec => rec.strIngredient20)
//                         && (
//                             <li>
//                                 {this.state.recipe.map(rec => rec.strMeasure20)} - {this.state.recipe.map(rec => rec.strIngredient20)}
//                             </li>
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default RecipePage