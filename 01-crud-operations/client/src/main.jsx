import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Form} from 'react-router-dom'

import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
  

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='update' element={<Update/>}/>
      <Route path='create' element={<Create/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
