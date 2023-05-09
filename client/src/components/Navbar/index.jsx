import { useState } from "react";
import "../../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import navbarData from "../../helpers/NavbarData";
import { useNavigate } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";
import logo from '../../assets/images/logo.png';

const Navbar = ({ user, userInfo, setUser, setUserInfo }) => {
  // Gather all important helpers and states
  const { removeCookie } = useApplicationData();
  const navigate = useNavigate();
  const [menuClicked, setMenuClicked] = useState(false);
  const LOGOUT = "/logout";

  // To set a link associated with item in the navbar
  const setLink = (item) => {
    if (item === LOGOUT) {
      removeCookie()
        .then(() => {
          setUserInfo({});
          setUser(null);
          navigate('/');
        });
    } else {
      navigate(item);
    }
  };

  // To open/close menu
  const toggleMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };


  return (
    <nav className="navbar2">
      <span className="navbar__logo">
        <img className="logo-image" src={logo} alt="" />
      </span>
      <span className="logo-title">PharmAli</span>
      {menuClicked ? (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClicked}
        />
      ) :
        (
          <FiX
            size={25}
            className={"navbar__menu"}
            onClick={toggleMenuClicked}
          />
        )}

      <ul className={
        menuClicked ? "navbar__list" : "navbar__list navbar__list--active"
      } >

        {navbarData(user).map((item, index) => {
          return (
            <li className="navbar__item" key={index} onClick={() => setLink(item.url)}>
              <span className="navbar__link">
                {item.title}
              </span>
            </li>
          );
        })}
        {user &&
          (<li className="welcomeUser">
            Welcome, {userInfo.name}
          </li>)}
      </ul>
    </nav >
  );

};
export default Navbar;