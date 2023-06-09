var express = require('express');
var router = express.Router();
moment = require('moment');

// import models
const Trip = require('../models/trips');
const Cart = require('../models/carts');

// Find in DB a trip corresponding to inputs in front
router.post('/', function(req, res) {
  // console.log(moment(req.body.date).format('yyyy-MM-ddTHH:mm:ss.SSS'))
  // console.log(moment(req.body.date).format())
  Trip.find({
    departure: { $regex: req.body.departure, $options: "i" } ,
    arrival: { $regex: req.body.arrival, $options: "i" },
    date: { $gte: moment(req.body.date).startOf('day'), $lte: moment(req.body.date).endOf('day') }
  })
  .then(data => {
    if (data) {
      res.json({result: true, trips: data})
    } else {
      res.json({result: false})
    }
})
})

router.get('/', (req, res) => {
	Trip.find().then(data => {
		res.json({ trips: data });
	});
});


module.exports = router;
