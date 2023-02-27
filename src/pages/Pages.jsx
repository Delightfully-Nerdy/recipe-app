import Home from './Home';
import Cusine from './Cusine';
import {Route, Routes } from "react-router-dom";
import Searched from './Searched';
import Recipe from './Recipe';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="cuisine/:type" element={<Cusine/>} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
  )
}

export default Pages