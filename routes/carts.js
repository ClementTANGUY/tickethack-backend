var express = require('express');
var router = express.Router();
moment = require('moment');

// import model
const Cart = require('../models/carts');
const Trip = require('../models/trips');

// Create a new trip in DB cart collection
router.post("/", (req, res) => {
  // Find first in DB trip collection the trip ID clicked in front
  const id = req.body.tripId;
  Trip.findById(id)
  .then(data => {
    if (data) {
      const newCart = new Cart({
			  trip: data._id,
			});
      newCart.save()
      .then(newDoc => {
				res.json({ result: true, cart: newDoc });
			});
    } else {
      res.json({ result: false, error: "Trip not found" });
    }
  });
});

// Get the trips registed for each cart
router.get("/", (req, res) => {
  Cart.find()
  // Display the trip details in a cart
  .populate('trip')
  .then(data => {
		res.json({ result: true, cart: data });
  });
});

// Delete a trip item in the cart collection (delete a cart)
router.delete("/:id", (req, res) => {
  Cart.deleteOne({ _id: req.params.id })
  .then(deletedDoc => {
    if (deletedDoc.deletedCount > 0) {
      // document successfully deleted
      Cart.find()
      .then(data => {
        res.json({ result: true, carts: data });
      });
    } else {
      res.json({ result: false, error: "Cart not found" });
    }
  });
});

module.exports = router;
