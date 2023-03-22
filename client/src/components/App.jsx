import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from './Home';
import Search from './Search';
import PharmaLocator from './PharmLocator';
import BlogPosts from './BlogPosts';
import MyBlogs from './MyBlogs';
import Login from './Login'
import Register from './Register';
import MyJournal from './MyJournal';
import Drug from './Drug';
import MyDrugs from './MyDrugs';
import BlogPost from './BlogPost';
import Navbar2 from "./Home/Navbar2";
import EditBlog from "./EditBlog";
import AddBlog from "./AddBlog";
import useApplicationData from "../hooks/useApplicationData";

function App() {
  const [user, setUser] = useState(null);
  const { getCookie } = useApplicationData();

  useEffect(() => {
    getCookie()
    .then((data) => {
      setUser(data.data.user_id);
    })
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar2 user={user}/>
        <Routes>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/drugs/*" element={<Drug user={user}/>} />
          <Route path="/pharma" element={<PharmaLocator user={user}/>} />
          <Route path="/myblogs" element={<MyBlogs user={user}/>} />
          <Route path="/myblogs/edit/*" element={<EditBlog user={user}/>} />
          <Route path="/myblogs/add" element={<AddBlog user={user}/>} />
          <Route path="/myjournal" element={<MyJournal user={user}/>} />
          <Route path="/mydrugs" element={<MyDrugs user={user}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<BlogPosts />} />
          <Route path="/blogs/*" element={<BlogPost user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;