const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const orderRoutes = require("./app/routes/orderRoutes");
const shipmentRoutes = require("./app/routes/shipmentRoutes");
const userRoutes = require("./app/routes/userRoutes");
const passport = require("passport");
const router = express.Router();
// Passport config

require("./app/config/passport.js")(passport);

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(cors(corsOptions));

router.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  })
})

app.use(express.json());

// Configure
mongoose.connect(
  "mongodb+s***REMOVED***",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

// Passport middleware
app.use(passport.initialize());


// Routes

router.use("/users", userRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Welcome to kill less trees!" });
});
router.use(orderRoutes)
router.use(shipmentRoutes)
app.use('/api', router)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
