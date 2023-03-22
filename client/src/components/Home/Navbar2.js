import { useState } from "react";
import "../../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import navbarData from "../../helpers/NavbarData";
import { useNavigate, useParams } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";

const Navbar2 = (props) => {
  const { removeCookie, setDarkMode } = useApplicationData();
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

  return (
    <nav className="navbar2">
      <span className="navbar__logo">Pharmali!</span>
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
                  setDarkMode(
                    (previousDarkMode) =>
                      !previousDarkMode)
                } className="save"
              >Dark Mode</button>
      </ul>
    </nav >
  );

};
export default Navbar2;