const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:tScVMvZgsSc80ODR@cluster0.ji5pv3n.mongodb.net/Tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));

module.exports = connectionString;
