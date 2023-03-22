const router = require("express").Router();
const  getUser  = require('../db/queries/get-user');
const bcrypt = require("bcryptjs");


module.exports = (db, cookieParams) => {
  // For getting login state when app is refreshed
  router.get("/", (req, res) => {
    const id = req.signedCookies.id;
    getUser.getUserById(db, id)
      .then((user) => {
        if (user.rows.length > 0) {
          res.json(user.rows[0]);
        }
      }
      );
  });

  // For logging in
  router.post("/login", (req, res) => {
    const userInfo = { email: req.body.email };
    console.log(req.body);
    getUser.getUser(db, userInfo)

      .then((result) => {
        // If a user exists
        if (result.rows.length > 0) {
          // If password is correct
          if (bcrypt.compareSync(req.body.password, result.rows[0].password)) {
            console.log(result.rows[0]);
            res.cookie('id', result.rows[0].id, cookieParams);
            message = { email: userInfo, id: result.rows[0].id };
          } else {
            message = 'Incorrect password';
          }
        } else {
          message = 'Account does not exist';
        }
        res.send({ message });
      });
  });

  // For registering
  router.post("/register", (req, res) => {
    // Gather user information to add to db
    const userInfo = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      postal_code: req.body.postalCode
    };
    console.log('start register');
    getUser.getUser(db, userInfo)
      .then((data) => {
        console.log('User Added');
        userInfo.id = data;
        // If account doesn't exist with this email
        res.cookie('id', userInfo.id, cookieParams);
        res.send({ message: userInfo });
      })
      .catch((err) => {
        console.log('error', err);
        // If account does exist with this email
        res.status(400).send({ message: err.detail });
      });
  });

  // For logging out
  router.post("/logout", (req, res) => {
    res.clearCookie('id');
    res.end();
  });

  return router;
};