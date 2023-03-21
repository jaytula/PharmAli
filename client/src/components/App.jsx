import '../styles/App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login'
import Register from './Register';
import Search from './Search';
import PharmLocator from './PharmLocator';
import BlogPosts from './BlogPosts';
import MyBlogs from './MyBlogs';
import MyJournal from './MyJournal';
import Drug from './Drug';
import useApplicationData from '../hooks/useApplicationData';
import BlogPost from './BlogPost';
import MyDrugs from './MyDrugs';

function App() {
  // The different pages user could visit
  const HOME = "HOME";
  const LOGIN = "LOGIN";
  const REGISTER = "REGISTER";
  const SEARCH = "SEARCH";
  const PHARM_LOCATOR = "PHARMACY NEARBY";
  const BLOG_POSTS = "BLOG POSTS";
  const MY_BLOGS = "MY BLOGS";
  const MY_JOURNAL = "MY JOURNAL";
  const DRUG = "DRUG";
  const BLOG = "BLOG";
  const MY_DRUGS = "MY DRUGS";
  const { page, menu, user, drugList, blogContent, drugContent, setMenu, setPage, setCookie, removeCookie, onSearchSubmit, setBlogContent } = useApplicationData(DRUG, HOME);
  const [darkMode, setDarkMode] = useState(false);

  const setBlog = (blog) => {
    setBlogContent(blog);
    setPage(BLOG);
  }

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar menu={menu} setMenu={setMenu} setPage={setPage} user={user} removeCookie={removeCookie} setDarkMode={setDarkMode} />
      {/* Page user is on */}
      {page === HOME &&
        (<Home user={user.id} />)}
      {page === LOGIN &&
        (<Login setPage={setPage} setCookie={setCookie} />)}
      {page === REGISTER &&
        (<Register setPage={setPage} setCookie={setCookie} />)}
      {page === SEARCH &&
        (<Search
          onSearchSubmit={onSearchSubmit} drugList={drugList} />)}
      {page === PHARM_LOCATOR &&
        (<PharmLocator user={user.id} />)}
      {page === BLOG_POSTS &&
        (<BlogPosts setBlog={setBlog} />)}
      {page === MY_BLOGS &&
        (<MyBlogs user={user.id} setBlog={setBlog} />)}
      {page === MY_JOURNAL &&
        (<MyJournal darkMode={darkMode} user_id={user.id} />)}
      {page === DRUG &&
        (<Drug content={drugContent} setPage={setPage} user_id={user.id} />)}
      {page === BLOG &&
        (<BlogPost blogContent={blogContent} setPage={setPage} user_id={user.id} />)}
      {page === MY_DRUGS &&
        (<MyDrugs user_id={user.id} />)}
    </div>
  );
}

export default App;