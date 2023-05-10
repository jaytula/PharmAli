import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from '../context/UserContext';
import { useEffect } from 'react';
import axios from '../axiosInstance';
import Home from './Home';
import Search from './Search';
import PharmaLocator from './PharmLocator';
import BlogPostList from './BlogPostList';
import Login from './Login';
import Register from './Register';
import MyJournal from './MyJournal';
import Drug from './Drug';
import MyDrugList from './MyDrugList';
import BlogPost from './BlogPost';
import Navbar from "./Navbar";
import SaveBlog from "./SaveBlog";
import useApplicationData from "../hooks/useApplicationData";
import '../styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const websocket = new WebSocket('ws://localhost:8080');

function App() {
  // Gather all important helpers and states
  const { user, setUser, userInfo, setUserInfo, allBlogs, setAllBlogs, drugs, setDrugs, setCookie, removeCookie } = useApplicationData();
  const addNotification = (title) => toast(`${title} has been added in blogs`);

  // Update all blogs for realtime updates
  useEffect(() => {
    websocket.onopen = () => {
      websocket.onmessage = (event) => {
        const blogs = JSON.parse(event.data);
        if (blogs.type === 'BLOGS') {
          setAllBlogs(blogs.blogs);
          return (blogs.title) ? addNotification(blogs.title) : null;
        }
      };
    };
  }, [setAllBlogs]);

  // When app is refreshed
  useEffect(() => {
    axios.get("/user")
      .then((data) => {
        setUser(data.data.id);
        setUserInfo(data.data);
        return axios.get("/blogs")
      })
      .then((data) => {
        setAllBlogs(data.data);
      })
  }, [setAllBlogs, setUser, setUserInfo]);

  // To get all saved meds when user is logged in
  useEffect(() => {
    if (user) {
      Promise.all([
        axios.get(`/favourite/${user}`),
      ]).then((data) => {
        setDrugs(data[0].data)
      })
    }
  }, [user, setDrugs]);

  // create context file to make api call to get cookie and get cookie from that (context provider)
  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} setUserInfo={setUserInfo} userInfo={userInfo} removeCookie={removeCookie} />
        <ToastContainer autoClose={3000} />
        <UserProvider>
          <Routes>
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/register" element={<Register setUser={setUser} setUserInfo={setUserInfo} setCookie={setCookie} />} />
            <Route path="/login" element={<Login setUser={setUser} setUserInfo={setUserInfo} setCookie={setCookie} />} />
            <Route path="/blogs/:id" element={<BlogPost user={user} userInfo={userInfo} websocket={websocket} allBlogs={allBlogs} />} />
            <Route path="/drugs/*" element={<Drug user={user} drugs={drugs} setDrugs={setDrugs} />} />
            <Route path="/pharma" element={<PharmaLocator user={user} />} />
            <Route path="/blogs" element={<BlogPostList user={user} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
            <Route path="/blogs/add" element={<SaveBlog user={user} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
            <Route path="/blogs/edit/*" element={<SaveBlog user={user} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />} />
            <Route path="/myjournal" element={<MyJournal user={user} />} />
            <Route path="/mydrugs" element={<MyDrugList user={user} drugs={drugs} setDrugs={setDrugs} />} />
          </Routes>
        </ UserProvider>
      </Router>
    </div>
  );
}

export default App;
