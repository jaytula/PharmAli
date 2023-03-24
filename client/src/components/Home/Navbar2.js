import { useState } from "react";
import "../../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import navbarData from "../../helpers/NavbarData";
import { useNavigate, useParams } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";
import logopharm from '../../assets/images/logo-pharm.png';

const Navbar2 = (props) => {
  const { removeCookie } = useApplicationData();
  const navigate = useNavigate();
  const LOGOUT = "/logout"

  const setLink = (item) => {
    if (item === LOGOUT) {
      removeCookie()
        .then(() => {
          navigate('/');
        });
    } else {
      navigate(item);
    }
  }

  const [menuClicked, setMenuClicked] = useState(false);
  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked)
  }
// if(props.userInfo){
//   console.log(props.userInfo.name);
// }

  return (
    <nav className="navbar2">
      <span className="navbar__logo">
        <img className="logo-image" src={logopharm}/>
        </span>
        <span className="logo-title">PHARMALI</span>
      {menuClicked ? (

        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />) :
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
        
          {props.userInfo &&
                 (<li className="welcomeUser">
                  Welcome {props.userInfo.name} 💊
                 </li>)}
        {navbarData(props.user).map((item, index) => {
          return (
            <li className="navbar__item" key={index} onClick={() => setLink(item.url)}>
              <a className="navbar__link">

                {item.title}
              </a>
            </li>
          );
        })}

        <button
          onClick={() =>
            props.setDarkMode(
              (previousDarkMode) =>
                !previousDarkMode)
          } className="blog-button"
        >Dark Mode</button>
      </ul>
    </nav >
  );

};
export default Navbar2;