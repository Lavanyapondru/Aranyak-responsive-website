import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages.jsx/Home.jsx';
import About from './Pages.jsx/About.jsx';
import Catalog from './Pages.jsx/Catalog.jsx';
import Support from './Pages.jsx/Support.jsx';
import Blog from './Pages.jsx/Blog.jsx';
import Contact from './Pages.jsx/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"about",
    element:<About/>,
  },
  {
    path:"catalog",
    element:<Catalog/>,
  },
  {
    path:"support",
    element:<Support/>,
  },
  {
    path:"blog",
    element:<Blog/>,
  },
  {
    path:"contact",
    element:<Contact/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
