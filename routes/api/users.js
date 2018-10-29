const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport');
const User = require('../../models/User');


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router
    .get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        user: req.user
    });
});

router.get("/preferences", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const user = User.findOne({"_id": req.user.id});
        res.json(req.user);
    });

router.patch("/preferences", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.findByIdAndUpdate(req.user.id, {
          "preferences.cuisine": req.body.cuisine,
          "preferences.movieGenre": req.body.movieGenre,
          "preferences.streamGenre": req.body.streamGenre,
          "preferences.liveEventType": req.body.liveEventType,
          "preferences.zip": req.body.zip
        }).then(user => {
                  res.json({
                    user: req.user
                });
            });
         });

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ "info.email": req.body.email }).then(user => {
        if (user) {
            errors.email = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                info: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                },
                preferences: {
                    cuisine: req.body.cuisines,
                    movieGenre: req.body.genres,
                    streamGenre: req.body.subs,
                    liveEventType: req.body.events,
                    zip: req.body.location
                },
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.info.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.info.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, email: user.info.email, name: user.info.name };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    
    
    User.findOne({"info.email": email} ).then(user => {
        
        if (!user) {
            errors.email = "This user does not exist";
            return res.status(400).json(errors);
        }
        
        console.log(user.info);
        
        bcrypt.compare(password, user.info.password).then(isMatch => {
            
            if (isMatch) {
                const payload = { id: user.id, email: user.info.email, name: user.info.name };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});



module.exports = router;
