const express = require('express');
const mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const salonRouter = require('./routes/Salons');

mongoose.connect(
    "mongodb+srv://Haris:5337618@cluster0.uqzho.mongodb.net/Ar-Salon?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);
//Express session
app.use(session({
    secret: 'secrettexthere',
    saveUninitialized: true,
    resave: true,
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/Salons',salonRouter);
app.use('/api/user', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/booking', require('./routes/api/booking'))

app.listen(5000, () => {
    console.log("Server is running...");
});
