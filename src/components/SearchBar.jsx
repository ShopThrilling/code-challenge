// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import nytimesApi from '../data/nytimesApi';
// import Fuse from 'fuse.js';


// const useStyles = makeStyles((theme) => ({
//   searchForm: {
//       margin: theme.spacing(1),
//       width: "25ch",
//       display: "inline-flex",
//       paddingLeft: 45,
//   },
//   iconButton: {
//     marginTop: 10,
//   }
// }));

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [articles, setArticles] = useState([]);

//   const classes = useStyles();

//   useEffect(() => {
//     fetch(nytimesApi)
//       .then(response => response.json())
//       .then(articleData => {
//         setArticles(articleData)
//       })
//   }, []);

//   const fuse = new Fuse(articles, {
//     keys: [
//       "section",
//       "title",
//       "byline",
//     ],
//   })

//   const searchResults = fuse.search(searchQuery);
//   const articleResults = searchResults.map(result => result.article)

//   const handleSearch = ({ currentTarget = {} }) => {
//     const { value } = currentTarget;
//     setSearchQuery(value);
//     console.log("articles", articleResults)
    // search by title
    // let searchByTitle = articles.results.filter(article => {
    //   article.title.toLowerCase().includes(searchValue.toLowerCase());
    // });
    // console.log("Data", searchByTitle)
    // search by byline
    // let searchByAuthor = articles.results.filter(article => {
    //   article.byline.toLowerCase().includes(searchValue.toLowerCase());
    // });
    // search by section
    // let searchBySection = articles.results.filter(article => {
    //   article.byline.toLowerCase().includes(searchValue.toLowerCase());
    // })
  // };

//   return (
//     <form className={classes.searchForm} noValidate autoComplete="off">
//       <TextField 
//       id="standard-basic" 
//       label="Search"
//       value={searchQuery}
//       // onChange={event => setSearchValue(event.target.value)}
//       onChange={handleSearch}
//       />
//       <IconButton className={classes.iconButton} onClick={() => handleSearch()}>
//         <SearchIcon /> 
//       </IconButton>
//     </form>
//   );
// };

// export default SearchBar;