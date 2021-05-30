var Salon = require('../models/Salons');
var MembershipPlan = require('../models/MembershipPlans');
var Appointments = require('../models/Appointments');
const bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


const salonSignupController = async (req, res, next) => {

    const password = await bcrypt.hash(req.body.password, 10);

    const newPlan = new MembershipPlan({
        name: req.body.planName,
        price: req.body.planPrice
    });
    const newSalon = new Salon({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password,
        join_date: req.body.join_date,
        address: {
            address_line1: req.body.address_line1,
            address_line2: req.body.address_line2,
            country: req.body.country,
            city: req.body.city,
            zip: req.body.zip
        },
        geoLocation: {
            lat: req.body.lat,
            long: req.body.long
        },
        phoneNumber: req.body.phoneNumber,
        pictures: {
            pic1: req.body.pic1,
        },
        creditCard: {
            cardNumber: req.body.cardNumber,
            expiryMonth: req.body.expiryMonth,
            expiryYear: req.body.expiryYear,
            cvv: req.body.cvv
        },
        membership_plan: newPlan._id
    });
    const result = await newSalon.save()
        .catch((error) => {
            res.json({ "error message": error.name });
        });
    res.json(result);
}

const emailCheck = async (req, res, next) => {
    Salon.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log(err);
        }
        var message;
        if (user) {
            message = "user with that email exists already";
        } else {
            message = "user doesn't exist";
        }
        res.json({ message: message });
    });
};

const usernameCheck = async (req, res, next) => {
    Salon.findOne({ username: req.body.username }, function (err, user) {
        if (err) {
            console.log(err);
        }
        var message;
        if (user) {
            message = "Username not available";
        } else {
            message = "Username Available";
        }
        res.json({ message: message });
    });
};

passport.use('local',
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await Salon.findOne({ username });
            if (!user) {
                return done(null, false, { message: 'User not found' });
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    return done(null, user, { message: 'Username found' });
                } else {
                    return done(null, false, { message: 'Invalid Password' });
                }
            });
        } catch (error) {
            return done(error);
        }
    })
);

passport.serializeUser((user, cb) => {
    console.log(user);
    cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
    Salon.findOne({ _id: id }, (err, user) => {
        const userInformation = {
            username: user.username,
        };
        cb(err, userInformation);
    });
});

const salonLogin = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.json(info);
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.json({ "message": "Succesfully Authenticated" });
            });
        }
    })(req, res, next);
};
const Logout = (req, res) => {
    if (req.isAuthenticated()) {
        req.logout();
        res.json({ "message": "Logout Succesful" });
    }
    else res.json({ "message": "Login First!" });
};
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    else res.json({ "message": "Please Login to continue" });
};

const getAllSalons = async (req, res, next) => {
    const salons = await Salon.find({});
    res.json(salons)
};

const getSalonbyId = async (req, res, next) => {
    const salon = await Salon.findById(req.params.id);
    res.json(salon)
};

const getAppointmentsbyId = async (req, res, next) => {
    const appointments = await Appointments.findOne({ salon_id: req.params.salonid });
    if (appointments != null) {
        res.json(appointments);
    }
    else {
        res.json({ "message": "No data" });
    }
};

const changeAppointmentStatus = async (req, res, next) => {
    const id = req.params.appId;
    const filter = { _id: id };
    let app = await Appointments.findOneAndUpdate(filter, { status: req.body.status });
    if (app === null) {
        res.json({ "message": "No appointment found with given id!" });
    }
    else {
        res.json({ "message": "Status Changed" });
    }
};

const deleteAppointment = async (req, res, next) => {
    try {
        const app = await Appointments.findByIdAndDelete(req.params.appId);
        if (!app) {
            res.json({ "message": "No appointment found with given id!" });
        }
        else {
            res.json({ "message": "Appointment Deleted" });
        }
    } catch (error) {
        response.status(500).json(error);
    }
};

const editProfile = async (req, res, next) => {
    const id = req.params.SalonId;
    const password = await bcrypt.hash(req.body.password, 10);
    const filter = { _id: id };
    let prof = await Salon.findOneAndUpdate(filter,
        {
            name: req.body.name,
            password,
            address: {
                address_line1: req.body.address_line1,
                address_line2: req.body.address_line2,
                country: req.body.country,
                city: req.body.city,
                zip: req.body.zip
            },
            geoLocation: {
                lat: req.body.lat,
                long: req.body.long
            },
            phoneNumber: req.body.phoneNumber,
            pictures: {
                pic1: req.body.pic1,
            }
        });
    if (prof === null) {
        res.json({ "message": "No Salons found with given id!" });
    }
    else {
        res.json({ "message": "Changes Saved" });
    }
};

const changeMembershipPlan = async (req, res, next) => {
    const id = req.params.SalonId;
    const filter = { _id: id };
    const newPlan = new MembershipPlan({
        name: req.body.planName,
        price: req.body.planPrice
    });
    let prof = await Salon.findOneAndUpdate(filter,
        {
            membership_plan: newPlan._id
        });
    if (prof === null) {
        res.json({ "message": "No Salons found with given id!" });
    }
    else {
        res.json({ "message": "Membership plan changed" });
    }
};

module.exports = {
    salonSignupController,
    emailCheck,
    usernameCheck,
    salonLogin,
    isLoggedIn,
    Logout,
    getAllSalons,
    getSalonbyId,
    getAppointmentsbyId,
    changeAppointmentStatus,
    deleteAppointment,
    editProfile,
    changeMembershipPlan
};