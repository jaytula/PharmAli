import '../styles/App.css';
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

  const { page, menu, drugContent, setMenu, setPage, onSubmit } = useApplicationData(DRUG, HOME);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar menu={menu} setMenu={setMenu} setPage={setPage} />
      {/* Page user is on */}
      {page === HOME &&
        (<Home />)}
      {page === LOGIN &&
        (<Login setPage={setPage} />)}
      {page === REGISTER &&
        (<Register setPage={setPage} />)}
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
      {page === DRUG &&
        (<Drug content={drugContent}/>)}
    </div>
  );
}

export default App;