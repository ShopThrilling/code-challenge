import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import nytimesApi from '../data/nytimesApi';
import Fuse from 'fuse.js';

// //----------------------------- styles ---------------------------------//
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