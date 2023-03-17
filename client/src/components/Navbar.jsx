import React from 'react'
import { useState } from 'react'
import "../styles/Nav.css"
import { NavbarData } from './NavbarData'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Navbar = () => {

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
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='navbar'>
            <MenuIcon onClick={showMenu} />
        </div>
        <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
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