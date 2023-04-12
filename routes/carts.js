var express = require('express');
var router = express.Router();
 moment = require('moment');
// import trips model
const Cart = require('../models/carts');
const Trip = require('../models/trips');


router.post('/', function(req, res) {
  
Trip.findOne({_id: req.body._id})

.then((response) => response.json())
        .then((Data) => {
          const newCart = new Cart({
            TtripIncart: Data.trips._id
          });
          newCart.save();
          res.json({ result: true, carts: newCart });

})

    })




//   Trip.find({departure: { $regex: req.body.departure, $options: "i" } ,
//   arrival: { $regex: req.body.arrival, $options: "i" }, date: { $gte: moment(req.body.date).startOf('day'), $lte: moment(req.body.date).endOf('day') }})
//   .then(data => {
//     if (data) {
//       res.json({result: true, trips: data})
//     } else {
//       res.json({result: false})
//     }
// })

module.exports = router;
