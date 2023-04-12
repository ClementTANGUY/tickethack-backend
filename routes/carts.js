var express = require('express');
var router = express.Router();
 moment = require('moment');
// import trips model
const Cart = require('../models/carts');
const Trip = require('../models/trips');

router.post("/:id", (req, res) => {
  Trip.findById(req.params.id)
  .then(data => {
    if (data) {
      const newCart = new Cart(
      {
			  trip: data.trip,
			});
      console.log(newCart);
      res.json({ result: true, trip: data });
    } else {
      res.json({ result: false, error: "Trip not found" });
    }
  });
});

module.exports = router;
