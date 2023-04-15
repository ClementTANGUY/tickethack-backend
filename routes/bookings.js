var express = require('express');
var router = express.Router();
moment = require('moment');

 // import models
const Trip = require('../models/trips');
const Cart = require('../models/carts');
const Booking = require('../models/bookings');

// Create a new trip in DB cart collection
router.post("/", (req, res) => {
  // Find first in DB cart collection all the carts
  Cart.find()
  .then(data => {
    if (data) {
      const newBooking = new Booking({
			  carts: data.map(cart => cart._id)
			});
      newBooking.save()
      .then(newDoc => {
				res.json({ result: true, booking: newDoc });
			});
    } else {
      res.json({ result: false, error: "Trip not found" });
    }
  });
});

// Get all the trips booked
router.get("/", (req, res) => {
  Booking.find()
  .populate('carts')
  .then(data => {
		res.json({ result: true, booking: data });
  });
});
module.exports = router;
