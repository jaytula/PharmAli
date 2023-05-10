# PharmAli Project

A full stack web application built with React and Express that allows user to search for pharmaceutical drugs for their drug-drug interactions as well as create and view blogs and journals.


## Final Product
!["PharmAli Application Walkthrough"](docs/PharmAli.gif)

## Dependencies

- Server
  - bcryptjs
  - cookie-parser
  - dotenv
  - ejs
  - express
  - morgan
  - pg
  - validator
  - ws

- Client
  - @emotion/react
  - @emotion/styled
  - @fontsource/roboto
  - @fortawesome/fontawesome-svg-core
  - @fortawesome/free-solid-svg-icons
  - @fortawesome/react-fontawesome
  - @mui/icons-material
  - @mui/material
  - @mui/styled-engine-sc
  - @react-google-maps/api
  - @testing-library/jest-dom
  - @testing-library/react
  - @testing-library/user-event
  - axios
  - react
  - react-burger-menu
  - react-dom
  - react-icons
  - react-intersection-observer
  - react-router-dom
  - react-scripts
  - react-toastify
  - styled-components
  - timeago-react

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies: `npm i` in the server and client folder.
4. Setup the server:
  - Create .env file inside the server folder and copy content from .env.example into .env
  - Fill in the necessary PostgreSQL configuration
    - (  eg. 
      PORT=8080
      PGHOST=localhost
      PGUSER=labber
      PGPASSWORD=labber
      PGDATABASE=pharmali
      PGPORT=5432
      )
    - Go into psql
    - Create a db ( CREATE DATABASE pharmali; )
    - Creat user ( CREATE USER labber WITH ENCRYPTED PASSWORD 'labber'; )
    - Granting access to user ( GRANT ALL PRIVILEGES ON DATABASE pharmali TO labber;)
    - Run npm run db:reset

5. Run the client and server: `npm start` in client and server folder.
6. Visit `http://localhost:8080` for the server and `http://localhost:3000` for the client.

[Our Planning](https://docs.google.com/document/d/1U8eNGZD_s1pxMBGhaHakMUgmOXnHBa7SInt2FYvRPeY/edit?usp=sharing)

## Development Setup

- Make sure you have Docker installed.
- Create `./server/.env` with the following:

```
PGHOST=localhost
PGUSER=labber
PGPASSWORD=labber
PGDATABASE=pharmali
PGPORT=5432
NODE_ENV=development
```

- Run `npm run dev:start`
- Visit http://localhost:8080