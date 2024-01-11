// import './App.css';

import {FC, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/navigation-component';
import Home from './routes/Home/home-component';
import AboutMe from './routes/About-me/about-me-component';
import Mentoring from './routes/Mentoring/mentoring-component';
import Contact from './routes/Contact/contact-component';
import Shop from './routes/Shop/shop-component';
import Authentication from './routes/Authentication/authentication-component';

// import ART_DATA from './SandraSanchez-art-data';
// import { addCollectionAndDocuments } from './utilities/firebase-utilities';

import { getCategoriesAndDocuments } from './utilities/firebase-utilities';

const App: FC = () => {
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', ART_DATA);
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const categoriesMap = await getCategoriesAndDocuments();
        console.log(categoriesMap);
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  },[])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<AboutMe />}></Route>
        <Route path='mentoring' element={<Mentoring></Mentoring>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='authentication' element={<Authentication />}></Route>
      </Route>
  </Routes>
  );
};

export default App;
