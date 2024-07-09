import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header title="ReactFlix"/>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
