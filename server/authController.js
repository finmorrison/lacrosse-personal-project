const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    const accountArr = await db.find_user({ username: username });
    if (accountArr.length >= 1) {
      return res.status(200).send({ alert: "username already in use." });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    let newAccArr = await db.create_user({ username: username, hash: hash });
    req.session.user = {
      id: newAccArr[0].userID,
      username: newAccArr[0].username
    };
    res.status(200).send({
      message: "logged in",
      userData: req.session.user,
      loggedIn: true
    });
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    const accountArr = await db.find_user({ username: username });
    if (!accountArr[0]) {
      return res.status(200).send({ message: "username not found" });
    }
    const result = bcrypt.compareSync(password, accountArr[0].hash);
    if (!result) {
      return res.status(401).send({ message: "password incorrect" });
    }
    req.session.user = {
      id: accountArr[0].userID,
      username: accountArr[0].username
    };
    res.status(200).send({
      message: "logged in",
      userData: req.session.user,
      loggedIn: true
    });
  },
  userData: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("please log in");
    }
  }
};
