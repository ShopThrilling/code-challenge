import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  searchForm: {
      margin: theme.spacing(1),
      width: "25ch",
      display: "inline-flex",
      paddingLeft: 45,
  },
  iconButton: {
    marginTop: 10,
  }
}));

export default function SearchBar() {
  
  const classes = useStyles();

  return (
    <form className={classes.searchForm} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search"/>
      <IconButton className={classes.iconButton}>
        <SearchIcon /> 
      </IconButton>
    </form>
  );
};