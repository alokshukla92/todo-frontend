import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <NoteState>
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
