import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {Actors, Footer, MovieInformation, Movies, NavBar, Profile} from '.'

import useStyles from './styles.js';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline/>
        <NavBar/>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
          <Routes>
            <Route path='/movie/:id' element = {<MovieInformation/>} />
            <Route path='/actors/:id' element = {<Actors/>} />
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/approved" element={<Movies />} />
            <Route path="/profile/:id" element = {<Profile/>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App