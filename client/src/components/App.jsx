import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from './Home';
import Search from './Search';
import PharmaLocator from './PharmLocator';
import BlogPosts from './BlogPosts';
import Login from './Login'
import Register from './Register';
import MyJournal from './MyJournal';
import Drug from './Drug';
import MyDrugs from './MyDrugs';
import BlogPost from './BlogPost';
import Navbar2 from "./Home/Navbar2";
import SaveBlog from "./SaveBlog";
import useApplicationData from "../hooks/useApplicationData";
import { UserProvider } from '../context/UserContext';

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false)
  const { getCookie } = useApplicationData();

  useEffect(() => {
    getCookie()
      .then((data) => {
        setUser(data.data.user_id);
      })
  }, []);

  // create context file to make api call to get cookie and get cookie from that (context provider)
  return (
    <div className="App">
      <Router>
        <Navbar2 user={user} setDarkMode={setDarkMode} />
        <UserProvider>
          <Routes>
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/drugs/*" element={<Drug user={user} />} />
            <Route path="/pharma" element={<PharmaLocator user={user} />} />
            <Route path="/myblogs" element={<BlogPosts user={user} myBlogs={true} />} />
            <Route path="/myblogs/edit/*" element={<SaveBlog user={user} />} />
            <Route path="/myblogs/add" element={<SaveBlog user={user} />} />
            <Route path="/myjournal" element={<MyJournal user={user} darkMode={darkMode} />} />
            <Route path="/mydrugs" element={<MyDrugs user={user} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<BlogPosts user={user} />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
          </Routes>
        </ UserProvider>
      </Router>
    </div>
  );
}

export default App;
