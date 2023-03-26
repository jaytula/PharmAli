const navbarData = (login) => {

  const navbarData = [
    {
      title: "SEARCH",
      url: "/search",
    },
    {
      title: "PHARMACY NEARBY",
      url: "/pharma",
    },
    {
      title: "BLOG POSTS",
      url: "/blogs",
    }
  ]

  // If logged in allow user to visit the additional pages available
  if (login) {
    
    navbarData.push(
      {
        title: "MY JOURNAL",
        url: "/myjournal",
      },
      {
        title: "MY MED LIST",
        url: "/mydrugs",
      },
      {
        title: "LOGOUT",
        url: "/logout",
      }
    )
  } else {
    navbarData.unshift(
      {
        title: "LOGIN",
        url: "/login",
      },
      {
        title: "REGISTER",
        url: "/register",
      }
    )
  }


  // Add Home at the end to preserve the order of the pages (in case user is logged in)
  navbarData.unshift({
    title: "HOME",
    url: "/",
  })

  return navbarData
}

export default navbarData