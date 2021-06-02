import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        padding: 20 
    }
}))

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f57c00',
      }
    },
  });

export default function SearchBar(props) {
    const classes = useStyles()

    const searchRecipe = (e) => {
        e.preventDefault()
        props.getRecipes(e.target.value)
    }
    
    return (
        <ThemeProvider theme={theme}>
            <form className={classes.root}>
                <TextField
                    onChange={searchRecipe}
                    label='search by letter'
                />
            </form>
        </ThemeProvider>
    )
}