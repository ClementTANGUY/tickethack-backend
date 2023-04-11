const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    departure: "String",
    arrival: "String",
    date: { type: mongoose.Schema.Types.ObjectId, ref: 'dates' },
    price: Number,
})

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;
