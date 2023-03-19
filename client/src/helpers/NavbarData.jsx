import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const navbarData = (login) => {
  const navbarData = [
    {
      title: "SEARCH",
      icon: <SearchIcon color="primary" />,
      className: 'nav-text'
    },
    {
      title: "DRUG LIST A-Z",
      icon: <VaccinesIcon color="primary" />,
      className: 'nav-text'
    },
    {
      title: "PHARMACY NEARBY",
      icon: <LocalPharmacyIcon color="primary" />,
      className: 'nav-text'
    },
    {
      title: "BLOG POSTS",
      icon: <BookIcon color="primary" />,
      className: 'nav-text'
    }
  ]
// console.log(login);
  // If logged in allow user to visit the additional pages available
  if (login) {
    
    navbarData.push(
      {
        title: "MY BLOGS",
        icon: <AutoStoriesIcon color="primary" />,
        className: 'nav-text'
      },
      {
        title: "MY JOURNAL",
        icon: <CreateIcon color="primary" />,
        className: 'nav-text'
      },
      {
        title: "LOGOUT",
        icon: <PersonIcon color="primary" />,
        className: 'nav-text'
      }
    )
  } else {
    navbarData.unshift(
      {
        title: "LOGIN",
        icon: <PersonIcon color="primary" />,
        className: 'nav-text'
      },
      {
        title: "REGISTER",
        icon: <PersonIcon color="primary" />,
        className: 'nav-text'
      }
    )
  }


  // Add Home at the end to preserve the order of the pages (in case user is logged in)
  navbarData.unshift({
    title: "HOME",
    icon: <HomeIcon color="primary" />,
    className: 'nav-text'
  })

  return navbarData
}

export default navbarData