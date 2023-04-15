const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    carts: [{ type: mongoose.Schema.Types.ObjectId, ref: "carts" }],
})

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
