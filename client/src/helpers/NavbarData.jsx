import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const navbarData = (login) => {
  const navbarData = [
    {
      title: "SEARCH",
      url: "/search",
      // icon: <SearchIcon color="primary" />,
      // className: 'nav-text'
    },
    {
      title: "PHARMACY NEARBY",
      url: "/pharma",
      // icon: <LocalPharmacyIcon color="primary" />,
      // className: 'nav-text'
    },
    {
      title: "BLOG POSTS",
      url: "/blogs",
      // icon: <BookIcon color="primary" />,
      // className: 'nav-text'
    }
  ]
  // If logged in allow user to visit the additional pages available
  if (login) {
    
    navbarData.push(
      {
        title: "MY BLOGS",
        url: "/myblogs",
        // icon: <AutoStoriesIcon color="primary" />,
        // className: 'nav-text'
      },
      {
        title: "MY JOURNAL",
        url: "/myjournal",
        // icon: <CreateIcon color="primary" />,
        // className: 'nav-text'
      },
      {
        title: "MY DRUGS",
        url: "/mydrugs",
        // icon: <VaccinesIcon color="primary" />,
        // className: 'nav-text'
      },
      {
        title: "LOGOUT",
        url: "/logout",
        // icon: <PersonIcon color="primary" />,
        // className: 'nav-text'
      }
    )
  } else {
    navbarData.unshift(
      {
        title: "LOGIN",
        url: "/login",
        // icon: <PersonIcon color="primary" />,
        // className: 'nav-text'
      },
      {
        title: "REGISTER",
        url: "/register",
        // icon: <PersonIcon color="primary" />,
        // className: 'nav-text'
      }
    )
  }


  // Add Home at the end to preserve the order of the pages (in case user is logged in)
  navbarData.unshift({
    title: "HOME",
    url: "/",
    // icon: <HomeIcon color="primary" />,
    // className: 'nav-text'
  })

  return navbarData
}

export default navbarData