import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyNavbar from './componant/MyNavbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

import AllUsers from './pages/AllUsers'
import FormSubmit from './pages/FormSubmit'

import 'react-quill/dist/quill.snow.css'
import Details from './pages/Details'
import Protected from './pages/Protected'





export default function App() {
  return <>
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allusers' element={<Protected compo={<AllUsers />} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/step' element={<FormSubmit />} />
        <Route path='/details' element={<Details />} />

      </Routes>
    </BrowserRouter>
  </>
}

