const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

var db = mongoose.connection;
mongoose.connect('mongodb://localhost/app-3', { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var infoSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zipCode: Number,
    creditCard: Number,
    expDate: Number,
    ccv: Number,
    zipCode: Number
});

var User = mongoose.model('User', infoSchema);

app.use(express.static('public'));
app.use(bodyParser ());

app.post('/', (req, res, next) => {
    var user = new User(req.body);
    console.log(user)
})

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})
