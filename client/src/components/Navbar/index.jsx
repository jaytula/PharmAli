import React from 'react'
import "../../styles/Nav.css"
import NavbarData from '../../helpers/NavbarData'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Navbar = (props) => {
  const LOGOUT = "LOGOUT";
  const HOME = "HOME";
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

  const showMenu = () => props.setMenu(!props.menu);

  const showPage = (item) => {
    props.setPage(item);
    showMenu();
  };

  const setLink = (item) => {
    if (item === LOGOUT) {
      props.removeCookie()
        .then(() => {
          showPage(HOME);
        });
    } else {
      showPage(item);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div data-testid="navbar" className='navbar'>
          <MenuIcon data-testid="navmenu-icon" onClick={showMenu} />
        </div>
        <nav data-testid="nav-menu" className={props.menu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <ul className='navbar-toggle'>
              <CloseIcon color="primary" onClick={showMenu} />
            </ul>
            {NavbarData(props.user).map((item, index) => {
              return (
                <ul key={index} className={item.cName} onClick={() => setLink(item.title)} data-testid="nav-item">
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