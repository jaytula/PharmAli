import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/index.css';

import App from './components/App';
import Home from './components/Home';
import Search from './components/Search';
import PharmaLocator from './components/PharmLocator';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/drug/:id", element: <Search /> },
  { path: "/pharma", element: <PharmaLocator /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);