import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import SignUp from './components/SignUp.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import Login from './components/Login.jsx';
import ResturantMenu from './components/ResturantMenu.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/resturant/:id",
        element:<ResturantMenu/>,
      },
    ],
    errorElement: <Error />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={appRouter}/>
  
)
