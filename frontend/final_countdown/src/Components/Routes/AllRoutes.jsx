import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../Home/Home'
import SignIn from "../Login/Login"
export default function AllRoutes() {
  return (
      <Routes>
    <Route path='/' element={<SignIn/>} />
    <Route path='/home' element={<Home/>}/>
      </Routes>
  )
}
