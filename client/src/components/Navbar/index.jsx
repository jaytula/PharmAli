import React from 'react'
import "../../styles/Nav.css"
import NavbarData from '../../helpers/NavbarData'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useApplicationData from '../../hooks/useApplicationData'
import { useNavigate, useParams } from "react-router-dom";

const Navbar = (props) => {
  console.log('navbar', props.user);
  const navigate = useNavigate();
  const LOGOUT = "/logout"

  const { menu, setMenu, removeCookie, setDarkMode } = useApplicationData();

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#e3f2fd',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

  const showMenu = () => setMenu(!menu);

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <div data-testid="navbar" className='navbar'>
          <MenuIcon data-testid="navmenu-icon" onClick={showMenu} />
        </div>
        <nav data-testid="nav-menu" className={menu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <ul className='navbar-toggle'>
              <CloseIcon color="primary" onClick={showMenu} />
            </ul>
            <ul key={props.user} className="nav-text" data-testid="nav-item">
              {props.user &&
                (<h3>
                  Welcome {props.user}
                </h3>)}
              <button
                onClick={() =>
                  setDarkMode(
                    (previousDarkMode) =>
                      !previousDarkMode)
                } className="save"
              >Dark Mode</button>
            </ul>
            {NavbarData(props.user).map((item, index) => {
              return (
                <ul key={index} className={item.cName} onClick={() => setLink(item.route)} data-testid="nav-item">
                  {item.icon}
                  <span className="item-title">{item.title}</span>
                </ul>
              );
            })}
          </ul>
        </nav>
      </ThemeProvider>
    </>
  );
}


export default Navbar