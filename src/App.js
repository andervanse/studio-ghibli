import React from 'react';
import './App.css';
import { Movies } from './features/movies/Movies';
import { People } from './features/people/People';
import Menu from './components/Menu';
import Home from './components/Home/HomePage';
import About from './components/About/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Menu/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
