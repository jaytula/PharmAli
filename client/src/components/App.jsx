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
import axios from "axios";
import { useState } from 'react'

function App() {
  // The different pages user could visit
  const HOME = "HOME";
  const LOGIN_SIGNUP = "LOGIN/SIGNUP";
  const SEARCH = "SEARCH";
  const DRUG_LIST = "DRUG LIST A-Z";
  const PHARM_LOCATOR = "PHARMACY NEARBY";
  const BLOG_POSTS = "BLOG POSTS";
  const MY_BLOGS = "MY BLOGS";
  const MY_JOURNAL = "MY JOURNAL";

  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  console.log(page);
  
  const onSubmit = (text) => {
    Promise.all([
      axios.get(`https://api.fda.gov/drug/label.json?search=description:${text}`)
    ]).then((data) => {
      const remove = data[0].data.results[0].overdosage[0].replace('10 OVERDOSAGE ', '')
      console.log(remove);
    })
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
