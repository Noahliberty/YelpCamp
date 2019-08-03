var express  = require("express");
var router   = express.Router();
var passport = require("passport");
var User     = require("../models/user");

// Root Route
router.get("/", function(req, res) {
    res.render("landing");
});

// show register form
router.get("/register", (req, res) => {
	res.render("register", {page: 'register'});
});
// handle sign up logic
router.post("/register", (req, res) => {
	var newUser = new User({username: req.body.username});
	if(req.body.adminCode === "secretcode123") {
		newUser.isAdmin = true;
	}
	User.register(newUser, req.body.password, (err, user) => {
		if(err){
			console.log(err);
			return res.render("register", {error: err.message});
		}	else {
			passport.authenticate("local")(req, res, () => {
				req.flash("success", "Welcome To YelpCamp " + 						user.username);
				res.redirect("/campgrounds");	
			});
		}
	});	
});

// Show login form
router.get("/login", (req, res) => {
	res.render("login", {page: 'login'}); 
});

// Handle login logic
router.post("/login", passport.authenticate("local", {
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
}),  (req, res) =>{
});

// Logout Route 
router.get('/logout', (req, res) => {
  req.logout();
	req.flash("success", "Logged you out!");
  res.redirect('/campgrounds');
});

module.exports = router;