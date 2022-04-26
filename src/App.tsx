import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repository from './pages/Repository';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/:username" element={<Profile/>}/>
        <Route path="/:username/:repositoryname" element={<Repository/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
