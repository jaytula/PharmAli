import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const NavbarData = [
  {
    title: "HOME",
    icon: <HomeIcon color="primary"/>,
    className: 'nav-text'
  },
  {
    title: "LOGIN/SIGNUP",
    icon: <PersonIcon color="primary"/>,
    className: 'nav-text'
  },
  {
    title: "SEARCH",
    icon: <SearchIcon color="primary"/>,
    className: 'nav-text'
  },
  {
    title: "DRUG LIST A-Z",
    icon: <VaccinesIcon color="primary"/>,
    className: 'nav-text'
  },
  {
    title: "PHARMACY NEARBY",
    icon: <LocalPharmacyIcon color="primary"/>,
    className: 'nav-text'
  },
  {
    title: "BLOG POSTS",
    icon: <BookIcon color="primary"/>,
    className: 'nav-text'
  },
  {
    title: "MY BLOGS",
    icon: <AutoStoriesIcon color="primary"/>,
    className: 'nav-text'
  },
  {
    title: "MY JOURNAL",
    icon: <CreateIcon color="primary"/>,
    className: 'nav-text'
  }

]