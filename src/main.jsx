import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/home/Home.jsx'
import GlobalContext from './context/Context.jsx'
import Container from './container/Container.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/About.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/signup/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      {/* <Container/> */}
      <RouterProvider router={router} />
      {/* <Home /> */}
    </GlobalContext>
  </React.StrictMode>,
)
