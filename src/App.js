import React from 'react';
import './App.css';
import { Movies } from './features/movies/Movies';
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
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <a href="https://ghibliapi.herokuapp.com/">Studio Ghibli API</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
