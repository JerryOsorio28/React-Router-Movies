import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import Home from './Movies/Home';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList exact list={savedList} />
      <Route exact path = '/' component ={Home}/>
      <Route exact path = '/movies' render ={props => <MovieList {...props} movielist={MovieList}/>}/>
      <Route path = '/movies/:id' render ={props => <Movie {...props} movie={Movie}/>}/>
    </div>
  );
};

export default App;
