/**
 * Install mongoose and
 * require it here then
 * create a constant to store dbURI
 * and use it to create a connection
 * to the database
 */
const mongoose = require('mongoose');

const dbURI = 'INSERT_DATABASE_CONNECTION_STRING';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Database ${db.name} connected at ${db.host}:${db.port}`);
});
