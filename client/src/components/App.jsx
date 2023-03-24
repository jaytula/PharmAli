import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';
import Search from './Search';
import PharmaLocator from './PharmLocator';
import BlogPosts from './BlogPosts';
import Login from './Login';
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
  const [userInfo, setUserInfo] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const { getCookie } = useApplicationData();

  // When app is refreshed
  useEffect(() => {
    getCookie()
      .then((data) => {
        setUser(data.data.user[0].id);
        setUserInfo(data.data.user[0]);
      })
  }, []);

  // To get all saved meds when user is logged in
  useEffect(() => {
    console.log(user);
    if (user !== null) {
      console.log(user, '2');
      Promise.all([
        axios.get(`/favourite/${user}`),
      ]).then((data) => {
        setDrugs(data[0].data)
      })
    }
  }, [user]);

  // create context file to make api call to get cookie and get cookie from that (context provider)
  return (
    <div className="App">
      <Router>
        <Navbar2 user={user} setUser={setUser} setUserInfo={setUserInfo} setDarkMode={setDarkMode} userInfo={userInfo} />
        <UserProvider>
          <Routes>
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/register" element={<Register setUser={setUser} setUserInfo={setUserInfo} />} />
            <Route path="/login" element={<Login setUser={setUser} setUserInfo={setUserInfo} />} />
            <Route path="/blogs/:id" element={<BlogPost user={user} />} />
            <Route path="/drugs/*" element={<Drug user={user} drugs={drugs} setDrugs={setDrugs} />} />
            <Route path="/pharma" element={<PharmaLocator user={user} />} />
            {/* <Route path="/myblogs" element={<BlogPosts user={user} myBlogs={true} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} /> */}
            <Route path="/blogs" element={<BlogPosts user={user} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
            <Route path="/blogs/add" element={<SaveBlog user={user} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
            <Route path="/blogs/edit/*" element={<SaveBlog user={user} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
            <Route path="/myjournal" element={<MyJournal user={user} darkMode={darkMode} />} />
            <Route path="/mydrugs" element={<MyDrugs user={user} drugs={drugs} setDrugs={setDrugs} />} />
          </Routes>
        </ UserProvider>
      </Router>
    </div>
  );
}

export default App;
