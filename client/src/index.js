import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/index.css';

import Home from './components/Home';
import Search from './components/Search';
import PharmaLocator from './components/PharmLocator';
import BlogPosts from './components/BlogPosts';
import MyBlogs from './components/MyBlogs';
import Login from './components/Login'
import Register from './components/Register';
import MyJournal from './components/MyJournal';
import Drug from './components/Drug';
import MyDrugs from './components/MyDrugs';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/search", element: <Search /> },
  { path: "/drugs/:id", element: <Drug /> },

  { path: "/pharma", element: <PharmaLocator /> },

  { path: "/myblogs", element: <MyBlogs /> },
  { path: "/myblogs/edit/:id", element: <MyBlogs /> },
  { path: "/myjournal", element: <MyJournal /> },
  { path: "/mydrugs", element: <MyDrugs /> },

  { path: "/register", element: <Register /> },

  { path: "/login", element: <Login /> },

  { path: "/blogs", element: <BlogPosts /> },
  { path: "/blogs/:id", element: <BlogPost /> },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);