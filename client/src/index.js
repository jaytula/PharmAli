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
import BlogPosts from './BlogPosts';
import MyBlogs from './MyBlogs';
import Login from './Login'
import Register from './Register';
import MyJournal from './MyJournal';
import Drug from './Drug';
import MyDrugs from './MyDrugs';
import BlogPost from './BlogPost';
import Navbar from './Navbar';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/search", element: <Search /> },
  { path: "/drugs/:id", element: <Drug /> },

  { path: "/pharma", element: <PharmaLocator /> },

  { path: "/myblogs", element: <MyBlogs /> },
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
      <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);