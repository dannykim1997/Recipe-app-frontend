import React from 'react';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }));

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f57c00',
      }
    },
  });

export default function SortForm(props) {
    const classes = useStyles()

    const change = (e) => {
        e.preventDefault()
        props.selected(e.target.value)
    }
    
    return (
        <ThemeProvider theme={theme}>
            <FormControl className={classes.formControl} variant='outlined'>
                <InputLabel>Sort</InputLabel>
                <Select value={props.selection} onChange={(e) => {change(e)}} label='sort' color='primary'>
                    <MenuItem value='recipes'>oldest</MenuItem>
                    <MenuItem value='reverse'>newest</MenuItem>
                </Select>
            </FormControl>
        </ThemeProvider>
    )
}