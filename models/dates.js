const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema({
    $date: Date,
})

const Date = mongoose.model('dates', dateSchema);

module.exports = Date;
