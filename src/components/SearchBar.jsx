import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


// ----------------------------- Styles ----------------------------------- //

const useStyles = makeStyles((theme) => ({
  searchForm: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    paddingBottom: 55,
  },
  textField: {
    width: 350,
  },
}));


// ----------------------------- SearchBar --------------------------------- //

const SearchBar = ({ handleSearch, searchQuery }) => {
  const classes = useStyles();

  return (
    <div>
    <form className={classes.searchForm} noValidate autoComplete="off">
      <TextField 
      className={classes.textField}
      label="Search"
      value={searchQuery}
      onChange={handleSearch}
      />
    </form>
    </div>
  );
};

export default SearchBar;