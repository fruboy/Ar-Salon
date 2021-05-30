var express = require('express');
var router = express.Router();
//Salon Controller import
const SalonController = require('../controllers/Salon-Controllers');

// Salon Routes
router.post('/register',SalonController.salonSignupController);
router.post('/emailCheck',SalonController.emailCheck);
router.post('/usernameCheck',SalonController.usernameCheck);
router.post('/login',SalonController.salonLogin);
router.post('/logout',SalonController.Logout);

router.get('/allSalons',SalonController.isLoggedIn,SalonController.getAllSalons);
router.get('/:id',SalonController.isLoggedIn,SalonController.getSalonbyId);
router.get('/appointments/:salonid',SalonController.isLoggedIn,SalonController.getAppointmentsbyId);


router.put('/changeAppointmentStatus/:appId',SalonController.isLoggedIn,SalonController.changeAppointmentStatus);

router.delete('/deleteAppointment/:appId',SalonController.isLoggedIn,SalonController.deleteAppointment);

router.put('/editProfile/:SalonId',SalonController.isLoggedIn,SalonController.editProfile);
router.put('/changeMembershipPlan/:SalonId',SalonController.isLoggedIn,SalonController.changeMembershipPlan);

module.exports = router;