require("dotenv").config();
const massive = require("massive");
const express = require("express");
const authCtrl = require("./authController");
const session = require("express-session");
const prodCtrl = require("./productController");

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;

const app = express();
app.use(express.json());
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
  });
});

app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/api/user-data", authCtrl.userData);
app.get("/api/getMensHeads", prodCtrl.getProducts);
