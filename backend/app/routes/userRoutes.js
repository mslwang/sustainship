require('dotenv').config()
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

mongoUri = process.env.MONGO_URI;

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const User = require("../models/userModel.js");
const Order = require("../models/orderModel.js");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check database to see if email exists
  User.findOne({ email: req.body.email }).then(user => {
  if (user) {
    return res.status(400).json({ email: "Email already exists" });
  } else { // If email does not exist, register person
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      postalCode: req.body.postalCode,
      areaCode: req.body.areaCode
    });
  // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route GET api/users/:id
// @desc Retrieve user details
// @access Public
router.get("/:id", async (request, response) => {
  const user = await User.findById(request.params.id).exec();

  try {
    if(request.params.id){
      const res = {
        name: user.name,
        address: user.address,
        postalCode: user.postalCode,
        areaCode: user.areaCode
      };
      response.send(res);
    } else {
      response.status(401);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/:id/orders", async (request, response) => {
  const orders = await Order.find({ buyerId: request.params.id }).exec();

  try {
    if(request.params.id){
      response.send(orders);
    } else {
      response.status(401);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/users/:email", async (request, response) => {
  try {
    const shipment = await shipmentModel.findByIdAndDelete(request.params.id);

    if (!shipment) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
