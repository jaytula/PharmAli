import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import LoginSignup from './LoginSignup';
import Search from './Search';
import DrugList from './DrugList';
import PharmLocator from './PharmLocator';
import BlogPosts from './BlogPosts';
import MyBlogs from './MyBlogs';
import MyJournal from './MyJournal';

import { useState } from 'react'

function App() {
  // The different pages user could visit
  const HOME = "HOME";
  const LOGIN_SIGNUP = "LOGIN_SIGNUP";
  const SEARCH = "SEARCH";
  const DRUG_LIST = "DRUG_LIST";
  const PHARM_LOCATOR = "PHARM_LOCATOR";
  const BLOG_POSTS = "BLOG_POSTS";
  const MY_BLOGS = "MY_BLOGS";
  const MY_JOURNAL = "MY_JOURNAL";

  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(SEARCH);
  const onSubmit = (text) => {
    console.log(text)
  }
  
  return (
    <div className="App">
      <Navbar menu={menu} setMenu={setMenu} setPage={setPage} />
      {page === HOME &&
        (<Home />)}
      {page === LOGIN_SIGNUP &&
        (<LoginSignup />)}
      {page === SEARCH &&
        (<Search
          onSubmit={onSubmit} />)}
      {page === DRUG_LIST &&
        (<DrugList />)}
      {page === PHARM_LOCATOR &&
        (<PharmLocator />)}
      {page === BLOG_POSTS &&
        (<BlogPosts />)}
      {page === MY_BLOGS &&
        (<MyBlogs />)}
      {page === MY_JOURNAL &&
        (<MyJournal />)}
    </div>
  );
}

export default App;
