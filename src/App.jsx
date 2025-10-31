import React from 'react';
import Header from './components/Header'
import AnimeRoutes from './components/AnimRoutes'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimeRoutes />
      </Router>
    </>
  )
};

export default App;
