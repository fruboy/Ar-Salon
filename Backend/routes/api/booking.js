const express = require('express');

const router = express.Router();

//route GET api/booking
//@desc Test route 


router.get('/', (req,res)=>res.send('booking route'))

module.exports= router;
