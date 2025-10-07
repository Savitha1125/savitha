import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import ContactDetails  from './Contact-details';
import BasicExample from './Nav';
import HomeDetails from './HomeDetails';
export default function Router(){
  return(
      <BrowserRouter>
      <BasicExample />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Home' element={<Home/>}>
      <Route path='home-details' element={<HomeDetails/>}/>
      <Route path='details/:id' element={<HomeDetails/>}/>
      </Route>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}>
      <Route path='details' element={<ContactDetails/>}/>
      </Route>
    </Routes>

    </BrowserRouter>
  );
}