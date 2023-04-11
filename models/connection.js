const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:18CMEkxR8ay25Bzo@cluster0.4lrswf9.mongodb.net/trips';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));

module.exports = connectionString;