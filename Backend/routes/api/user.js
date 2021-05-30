const { compareSync } = require('bcryptjs');
const express = require('express');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar')
const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken")
const config = require ('config');


const User = require('../../models/user');

const router = express.Router();


//route POST api/user
//@desc Register user


router.post('/',[
    check('name', 'name is required ').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter password with 6 or more character').isLength({min:6}),
    check('number', 'Please enter a valid number').isLength({min:11})
], async (req,res)=>{
    console.log(req.body);
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
    }
    // if user exist 
    const {name,email,password,number}=req.body
    try {
        let user = await User.findOne({email});
        if (user){
           return res.status(400).json({ errors: [{msg: "email is already register"}]})
        }

        const avatar = gravatar.url(email, {
            d:'retro', 
            s:'200',
            r:'pg',   
        })

        user = new User ({
            name,
            email,
            password,
            number,
            avatar
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        
        await user.save();
        const payload = {
            user:{
              id: user.id
            }
        }
        jwt.sign(payload, config.get("jwtsecret"), {expiresIn: 360000}, 
        (err, token)=>{
            if(err) throw err;
            res.json({token})
        }
        )
    }
    catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }   
})

module.exports= router;
