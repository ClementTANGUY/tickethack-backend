const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "trips" }],
})

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
