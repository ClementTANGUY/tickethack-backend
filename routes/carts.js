var express = require('express');
var router = express.Router();
 moment = require('moment');
// import trips model
const Cart = require('../models/carts');
const Trip = require('../models/trips');

router.post("/", (req, res) => {
  Trip.findById(req.body.tripId)
  .then(data => {
    if (data) {
      const newCart = new Cart({
			  trip: data.trip
			});
      newCart.save()
      .then(newDoc => {
				res.json({ result: true, trip: newDoc });
			});
    } else {
      res.json({ result: false, error: "Trip not found" });
    }
  });
});

module.exports = router;
