import { useState } from "react";
import "../../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import useApplicationData from "../../hooks/useApplicationData";
// const navbarLinks = [{url:"/home", title:"Home"}]
const Navbar2 = () => {

const navbarLinks = [
  {url:"/", title:"Home"},
  {url:"/search", title:"Search"},
  {url:"/pharma", title:"Pharmacy Nearby"},
  {url:"/blogs", title:"Blog Posts"},
  {url:"/myblogs", title:"My Blogs"},
  {url:"/myjournal", title:"My Journal"},
  {url:"/mydrugs", title:"My Med List"},
  {url:"/logout", title:"Log Out"},
]
const { setDarkMode } = useApplicationData();
const [menuClicked, setMenuClicked] = useState(false);

const toggleMenuClick = () => {
  setMenuClicked(!menuClicked);
};
  return (
    <nav className="navbar2">
      <span className="navbar__logo">Pharmali!</span>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
       
      <ul className={
      menuClicked ? "navbar__list" : "navbar__list navbar__list--active"
      } >
        {navbarLinks.map((item,index) => {
          return (
            <li className="navbar__item" key={index}>
              
              <a className="navbar__link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
          <button
                onClick={() =>
                  setDarkMode(
                    (previousDarkMode) =>
                      !previousDarkMode)
                } className="save"
              >Dark Mode</button>
      </ul>
    </nav>
  );

};
export default Navbar2;