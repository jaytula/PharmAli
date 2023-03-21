const router = require("express").Router();
const getUser = require('../db/queries/get-user');
const bcrypt = require("bcryptjs");


module.exports = (db, cookieParams) => {
  // For getting login state when app is refreshed
  router.get("/", (req, res) => {
    const message = req.signedCookies.name
    res.send({ message });
  });

  // For logging in
  router.post("/login", (req, res) => {
    const userInfo = { email: req.body.email }
    getUser.getUser(db, userInfo)
      .then((result) => {
        // If a user exists
        if (result.rows.length > 0) {
          // If password is correct
          if (bcrypt.compareSync(req.body.password, result.rows[0].password)) {
            res.cookie('name', result.rows[0].id, cookieParams)
            message = { userInfo: result.rows[0] };
          } else {
            message = 'Incorrect password';
          }
        } else {
          message = 'Account does not exist';
        }
        res.send({ message });
      })
  });

  // For registering
  router.post("/register", (req, res) => {
    // Gather user information to add to db
    const userInfo = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      postal_code: req.body.postalCode
    }
    getUser.getUser(db, userInfo)
      .then((data) => {
        userInfo.id = data.rows[0].id;
        // If account doesn't exist with this email
        res.cookie('name', userInfo.id, cookieParams)
        res.send({ message: { userInfo } });
      })
      .catch((err) => {
        // If account does exist with this email
        res.send({ message: err.detail });
      })
  });

  // For logging out
  router.post("/logout", (req, res) => {
    res.clearCookie('name');
    res.end();
  });

  return router;
};