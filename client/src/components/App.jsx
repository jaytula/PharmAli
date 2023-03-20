import '../styles/App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login'
import Register from './Register';
import Search from './Search';
import DrugList from './DrugList';
import PharmLocator from './PharmLocator';
import BlogPosts from './BlogPosts';
import MyBlogs from './MyBlogs';
import MyJournal from './MyJournal';
import Drug from './Drug';
import useApplicationData from '../hooks/useApplicationData';
import BlogPost from './BlogPost';
import Articles from './Articles'

function App() {
  // The different pages user could visit
  const HOME = "HOME";
  const LOGIN = "LOGIN";
  const REGISTER = "REGISTER";
  const SEARCH = "SEARCH";
  const DRUG_LIST = "DRUG LIST A-Z";
  const PHARM_LOCATOR = "PHARMACY NEARBY";
  const BLOG_POSTS = "BLOG POSTS";
  const MY_BLOGS = "MY BLOGS";
  const MY_JOURNAL = "MY JOURNAL";
  const DRUG = "DRUG";
  const BLOG = "BLOG";
  const { page, menu, user, drugList, blogContent, drugContent, setMenu, setPage, setCookie, removeCookie, onSearchSubmit, setBlogContent } = useApplicationData(DRUG, HOME);
  const [darkMode, setDarkMode] = useState(false);

  const setBlog = (blog) => {
    setBlogContent(blog);
    setPage(BLOG);
  }
  console.log(user)
//   const { email, id} = user
// console.log("email",email)
// console.log("id",id)
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar menu={menu} setMenu={setMenu} setPage={setPage} user={user} removeCookie={removeCookie} />
      {/* Page user is on */}
      {page === HOME &&
        (<Home user={user} />)}
      {page === LOGIN &&
        (<Login setPage={setPage} setCookie={setCookie} />)}
      {page === REGISTER &&
        (<Register setPage={setPage} setCookie={setCookie} />)}
      {page === SEARCH &&
        (<Search
          onSearchSubmit={onSearchSubmit} />)}
      {page === DRUG_LIST &&
        (<DrugList drugList={drugList}/>)}
      {page === PHARM_LOCATOR &&
        (<PharmLocator user={user} />)}
      {page === BLOG_POSTS &&
        (<BlogPosts setBlog={setBlog} />)}
      {page === MY_BLOGS &&
        (<MyBlogs user={user} />)}
      {page === MY_JOURNAL &&
        (<MyJournal darkMode={darkMode} setDarkMode={setDarkMode}  user={user} />)}
      {page === DRUG &&
        (<Drug content={drugContent} />)}
      {page === BLOG &&
        (<BlogPost blogContent={blogContent} />)}
      {/* {(page === BLOG_POSTS) || (page === SEARCH) || (page === DRUG_LIST) && 
        <Articles/> } */}
    </div>
  );
}

export default App;