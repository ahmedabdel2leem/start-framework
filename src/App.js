import React from 'react'
import About from './components/routingComponents/About/About';
import Home from './components/Home/Home';
import Portfolio from './components/routingComponents/Portfolio/Portfolio';
import Contact from './components/routingComponents/Contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from './components/routingComponents/Hero/Hero';
const myRouter = createBrowserRouter([
  {

    path: '', element: <Home />, children: [
      {path:'',element:<Hero/>},
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      {path:'/contact',element: <Contact/>}
    ]
  },
])

export default function App() {
  return <>
    <RouterProvider router={myRouter} />
  </>
}
