import React from 'react'
import "../styles/Nav.css"
import { NavbarData } from './NavbarData'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Navbar = (props) => {

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <div data-testid="navbar" className='navbar'>
            <MenuIcon data-testid="navmenu-icon" onClick={showMenu} />
        </div>
        <nav data-testid="nav-menu" className={props.menu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showMenu}>
            <ul className='navbar-toggle'>
                <CloseIcon color="primary"/>
            </ul>
              {NavbarData.map((item, index) => {
                return (
                  <ul key={index} className={item.cName}>
                      {item.icon}
                      <span>{item.title}</span>
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