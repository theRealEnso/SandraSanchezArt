import './App.css';

import {FC, useEffect, useContext} from 'react';
import { CategoriesContext } from './contexts/categories-context';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/navigation-component';
import Home from './routes/Home/home-component';
import AboutMe from './routes/About-me/about-me-component';
import Mentoring from './routes/Mentoring/mentoring-component';
import Contact from './routes/Contact/contact-component';
import Authentication from './routes/Authentication/authentication-component';
import Category from './components/category/category-component';

import { getCategoriesAndDocuments } from './utilities/firebase-utilities';

// import ART_DATA from './SandraSanchez-art-data';
// import { addCollectionAndDocuments } from './utilities/firebase-utilities';

const App: FC = () => {
  const {setCategoriesMap} = useContext(CategoriesContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const categoriesMap = await getCategoriesAndDocuments();
        console.log(`Logging categories map from App component!: `, categoriesMap);
        setCategoriesMap(categoriesMap);
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  },[setCategoriesMap]);

  //for adding data to firestore
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', ART_DATA);
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<AboutMe />}></Route>
        <Route path='mentoring' element={<Mentoring></Mentoring>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='shop/:category' element={<Category></Category>}></Route>
        <Route path='authentication' element={<Authentication />}></Route>
      </Route>
  </Routes>
  );
};

export default App;
