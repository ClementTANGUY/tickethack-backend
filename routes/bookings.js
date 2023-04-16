var express = require('express');
var router = express.Router();
moment = require('moment');

 // import models
const Trip = require('../models/trips');
const Cart = require('../models/carts');
const Booking = require('../models/bookings');

// Create a new trip in DB cart collection
router.post("/", (req, res) => {
  // Find first all the carts in DB cart collection
  Cart.find()
  .then(data => {
    if (data) {
      const newBooking = new Booking({
        // Map over the carts to retrieve all the trips' Ids
			  trips: data.map(cart => cart.trip._id)
			});
      // Then save the booking in DB bookings  collection
      newBooking.save()
      Cart.deleteMany({})
      .then((newDoc, data) => {
				res.json({ result: true, booking: newDoc, carts: data });
			});
    } else {
      res.json({ result: false, error: "Couldn't register your booking from carts" });
    }
  });
});

// Get all the trips booked in a booking
router.get("/", (req, res) => {
  Booking.find()
  // Display all the trips details
  .populate('trips')
  .then(data => {
		res.json({ result: true, booking: data });
  });
});
module.exports = router;
