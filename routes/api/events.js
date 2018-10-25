const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/test", passport.authenticate('jwt', { session: false }), 
(req, res) => res.json(req.user));

module.exports = router;

