import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';

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

export default function UserRecipeCard(props) {
    const classes = useStyles()
    return (
        <Card 
        component={Link} to={`/myrecipe/${props.recipe.attributes.id}`} 
        className={classes.root}
        >
            <CardMedia image={`${props.recipe.attributes.image}`} className={classes.media}/>
            <CardContent>
                <Typography className={classes.title}>
                    {props.recipe.attributes.name}
                </Typography>
                <Typography>
                    {props.recipe.attributes.origin} <br/>
                    {props.recipe.attributes.category}
                </Typography>
            </CardContent>
        </Card>
    )
}