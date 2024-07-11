import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage'
import './assets/styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header title="ReactFlix"/>
        <Routes>
          <Route path='/' element={<HomePage/>} errorElement={<ErrorPage/>}/>
          <Route path='/movies' element={<MoviesPage/>} errorElement={<ErrorPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
