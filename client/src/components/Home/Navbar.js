import { useState } from "react";
import "../../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
// const navbarLinks = [{url:"/home", title:"Home"}]
const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked]= useState(false);
  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked)
  }
  return (
    <nav className="navbar2">
      <span className="navbar__logo">Pharmali!</span>
      {menuClicked ? (
      <FiMenu 
      size={25} 
      className={"navbar__menu"} 
      onClick={toggleMenuClick}
      /> ) :
      (
        <FiX
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
      </ul>
    </nav>
  );

};
export default Navbar;