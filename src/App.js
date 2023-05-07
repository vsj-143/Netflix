import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Netflix from './Pages/Netflix';
import Player from './Pages/Player';
import Movies from './Pages/Movies';
import UserLiked from './Pages/UserLiked';
import TVShows from './Pages/TVShows';
export default function App() {
  return (
   <>
   <BrowserRouter>
  <Routes>
  <Route path='/login' element={<Login/>}/> 
  <Route path='/signup' element={<Signup/>}/> 
   <Route path = "/player" element = {<Player/>}/>
   <Route path='/movies' element={<Movies/>}/>
   <Route path='/tv' element={<TVShows/>}/>
   <Route path='/mylist' element={<UserLiked/>}/>
  <Route path='/' element={<Netflix/>}/>


  </Routes>
  
   </BrowserRouter>
   </>
  
  );
}

