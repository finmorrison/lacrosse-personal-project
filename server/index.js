require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV, STRIPE_SECRET_KEY, SERVER_LOGOUT } = process.env;
const massive = require("massive");
const express = require("express");
const authCtrl = require("./authController");
const session = require("express-session");
const prodCtrl = require("./productController");
const payCtrl = require('./payController')
const stripe = require("stripe")(STRIPE_SECRET_KEY);



const app = express();
app.use(require("body-parser").text());
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

// app.use(async (req, res, next) => {
//   if (NODE_ENV === "development") {
//     const db = req.app.get("db");
//     const userData = await db.set_data();
//     console.log(userData);
//     req.session.user = {
//       id: userData[0].userid,
//       username: userData[0].username
//     };
//     next();
//   } else {
//     next();
//   }
// });

app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/api/user-data", authCtrl.userData);
app.put("/api/updateUser/:userid", authCtrl.updateUserInfo);
app.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.redirect(SERVER_LOGOUT);
});

app.get("/api/getMensHeads", prodCtrl.getMensProducts);
app.get("/api/getWomensHeads", prodCtrl.getWomensProducts);
app.post("/api/addToCart", prodCtrl.postToCart);
app.get("/api/getCart", prodCtrl.getCart);
app.delete("/api/delete/:cartid", prodCtrl.deleteItemFromCart);

app.post('/charge', (req, res, next) => {

  const charge = stripe.charges.create(
      {
          amount: req.body.amount,
          currency: 'usd',
          source: req.body.token.id,
          description: 'Stripe Checkout test charge'
      },
      function(err) {
          if (err) return res.sendStatus(500);
          else return res.status(200).send(charge);
      }
  );
});
