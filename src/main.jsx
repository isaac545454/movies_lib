import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Movie from './page/Movie'
import Search from './page/Search'
import Home from './page/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
         <Route element={<App />} >
          <Route path="/" element={<Home />} exact />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
