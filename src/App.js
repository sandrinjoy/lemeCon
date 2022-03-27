import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './components/Login';
import Chat from './components/Chat';
import { AuthProvider } from './context/auth_cont';
// import { render } from 'react-dom';
// import { Component } from "react";

function App() {
  return (
    // <BrowserRouter>
    <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Sign/>} />
            <Route exact path ="/chats" element={<Chat/>}/>
          </Routes>
    </AuthProvider>
    // <div style={{ fontFamily: 'Avenir' }}>
      // </div>
  );
}

export default App;
