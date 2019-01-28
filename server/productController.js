module.exports = {
  getMensProducts: async (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_mens_heads()
      .then(products => res.status(200).send(products));
  },
  getWomensProducts: async (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_womens_heads()
      .then(products => res.status(200).send(products));
  },

  postToCart: async (req, res) => {
    const db = req.app.get("db");
    const { itemid } = req.body;
    const itemArr = await db.find_item({ itemid: itemid });
    if (!itemArr[0]) {
      return res.status(500).send({ message: "itemArr screw up" });
    }
    const userArr = req.session.user.id;
    // console.log(userArr);
    await db.create_cart_item({ itemid: itemid, userid: userArr });
    req.session.cart = {
      itemid: itemArr[0].itemid,
      userid: userArr
    };
    res.status(200).send({
      message: "added to cart",
      cartData: req.session.cart,
      userData: req.session.user
    });
  },

  addStringJob: async (req, res) => {
    const db = req.app.get("db");
    const {
      pocketPlacement,
      meshType,
      meshColor,
      sidewallColor,
      shootingStrings,
      specialtyStyle,
      whip
    } = req.body;
    await db.add_string_selection({
      pocketPlacement: pocketPlacement,
      meshType: meshType,
      meshColor: meshColor,
      sidewallColor: sidewallColor,
      shootingStrings: shootingStrings,
      specialtyStyle: specialtyStyle,
      whip: whip
    });
    res.status(200).send(req.body);
  },

  putStringJobCart: async (req, res) => {
    const db = req.app.get("db");
    const {
      pocketPlacement,
      meshType,
      meshColor,
      sidewallColor,
      shootingStrings,
      specialtyStyle,
      whip
    } = req.body;
    await db.find_string_job({
      pocketPlacement: pocketPlacement,
      meshType: meshType,
      meshColor: meshColor,
      sidewallColor: sidewallColor,
      shootingStrings: shootingStrings,
      specialtyStyle: specialtyStyle,
      whip: whip
    });
    const userArr = req.session.user.id;
    const {itemid} = req.query
    await db.create_cart_item({ itemid: itemid, userid: userArr });
    req.session.cart = {
      itemid: itemArr[0].itemid,
      userid: userArr
    };
  },

  getCart: async (req, res) => {
    const db = req.app.get("db");
    // const { itemid, userid } = req.body;
    const userArr = req.session.user.id;
    const cartArr = await db.show_cart({ userid: userArr });
    // console.log(cartArr);
    req.session.cart = cartArr;

    if (req.session.cart) {
      res.status(200).send(req.session.cart);
    } else {
      res.status(404).send("still not finding cart");
    }
  },

  deleteItemFromCart: async (req, res) => {
    const db = req.app.get("db");
    const { cartid } = req.params;
    const userInfo = req.session.user.id;
    try {
      const updatedCart = await db.delete_from_cart({
        userid: userInfo,
        cartid: cartid
      });
      // req.session.cart = updatedCart;
      if ((req.session.cart = updatedCart)) {
        res.status(200).send(req.session.cart);
      } else {
        res.status(500).send({ message: "not finding new cart" });
      }
    } catch (e) {
      console.log("server delete problem");
    }
  },

  payForAllItems: async (req, res) => {
    const db = req.app.get("db");
    const userInfo = req.session.user.id;
    await db.purchase({ userid: userInfo });
  }
};
