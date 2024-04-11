import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import SocialLife from './SocialLife';
import Workplace from './Workplace';
import Classroom from './Classroom';
import Resources from './Resources';
import './App.css';

export default function App() {
  return (
    <><Header />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/sociallife" element={<SocialLife />}> </Route>
      <Route path="/workplace" element={<Workplace />}> </Route>
      <Route path="/classroom" element={<Classroom />}> </Route>
      <Route path="/resources" element={<Resources />}> </Route>
    </Routes></>
  );
}

