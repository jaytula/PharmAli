const validator = require('validator');
const bcrypt = require("bcryptjs");
const router = require("express").Router();
const { getUserByEmail, addUser, getUserById } = require('../db/queries/get-user');


module.exports = (db, cookieParams) => {
  // For getting login state when app is refreshed
  router.get("/", (req, res) => {
    const user_id = req.signedCookies.name;
    getUserById(db, user_id)
      .then(({ rows: user }) => {
        res.send(user[0]);
      });
  });

  // For logging in
  router.post("/login", (req, res) => {
    // Validate the input
    const { email, password } = req.body;
    let status = 400;
    if (!(email && validator.isEmail(email))) {
      return res.status(status).send({ message: "Please provide a valid email" })
    }
    if (!password || password.length < 1) {
      return res.status(status).send({ message: "Please provide a valid password that is greater then 7 characters" })
    }
    getUserByEmail(db, email)
      .then(({ rows: user }) => {
        const correctPassword = (user.length > 0) ? bcrypt.compareSync(password, user[0].password) : null;
        let message;
        // If user exists and password is correct
        if (correctPassword) {
          res.cookie('name', user[0].id, cookieParams);
          message = user[0];
          status = 200;
        }
        // If user exists and password is incorrect
        if (correctPassword === false) {
          message = 'Incorrect password';
        }
        // If user doesn't exist
        if (correctPassword === null) {
          message = 'Account does not exist';
        }
        return res.status(status).send({ message });
      })
  });

  // For registration
  router.post("/register", async (req, res) => {
    // Validate the registration info
    const { name, email, password, postalCode } = req.body;
    const userInfo = { name, email, password: bcrypt.hashSync(req.body.password, 10), postal_code: postalCode };
    let status = 400
    if (!name || name.length < 5) {
      return res.status(status).send("Please include a full name that contains more than 5 characters")
    }
    if (!email || !validator.isEmail(email)) {
      return res.status(status).send("Please provide a valid email")
    }
    if (!password || password.length < 8) {
      return res.status(status).send("Please provide a valid password that is greater than 7 characters")
    }
    if (!postalCode || postalCode.length !== 6) {
      return res.status(status).send("Please provide a valid postalcode that is greater 6 characters")
    }

    // If account does not exist vs. exists
    getUserByEmail(db, email)
      .then(() => addUser(db, userInfo))
      .then(({ rows: id }) => {
        userInfo.id = id[0].id;
        res.cookie('name', `${userInfo.id}`, cookieParams);
        return res.status(200).send(userInfo);
      })
      .catch((err) => res.status(status).send(err.detail.substring(13).replace(')', '')));
  });


  // For logging out
  router.post("/logout", (req, res) => {
    res.clearCookie('name');
    res.end();
  });

  return router;
};