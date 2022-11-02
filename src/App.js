import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Excercisedetails from './pages/Excercisedetails';

function App() {
  const [excercise, setExcercise] = useState([]);
  const [mainExc, setMainExc] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '03fc81b70emsha0f7ec399d273e1p1f32afjsn854465a98d8e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      .then(response => response.json())
      .then(response => {
        setExcercise(response)
        setMainExc(response.slice(0, 12))
      })
      .catch(err => console.error(err));

  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'
            element={
              <Home
                excercise={excercise}
                mainExc={mainExc}
                setMainExc={setMainExc}
              />
            } />
          <Route path='/excercise_details/:id' element={
            <Excercisedetails
              excercise={excercise}
            />
          } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
