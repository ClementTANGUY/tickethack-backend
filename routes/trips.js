var express = require('express');
var router = express.Router();
 moment = require('moment');
// import trips model
const Trip = require('../models/trips');


router.post('/', function(req, res) {
  // console.log(moment(req.body.date).format('yyyy-MM-ddTHH:mm:ss.SSS'))
  // console.log(moment(req.body.date).format())
  Trip.find({departure: { $regex: req.body.departure, $options: "i" } ,
  arrival: { $regex: req.body.arrival, $options: "i" }, date: { $gte: moment(req.body.date).startOf('day'), $lte: moment(req.body.date).endOf('day') }})
  .then(data => {
    if (data) {
      res.json({result: true, trips: data})
    } else {
      res.json({result: false})
    }
})
})

module.exports = router;
