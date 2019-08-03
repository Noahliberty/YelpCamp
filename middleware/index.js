var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleware goes in here


var middlewareObj = {};

// CHECK Campground Owner ship MW

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
  if(req.isAuthenticated()){
		Campground.findById(req.params.id, (err, foundCampground) => {
			if(err) {
				req.flash("error", "Campground Not Found");
				res.redirect("/back");
			}	 else {
	// 	Does the user own the campground
			if(foundCampground.author.id.equals(req.user._id) || req.user.isAdmin){
			next();
			} else {
				req.flash("error", "You Don't Have Permission To Do That!");
				res.redirect("back");
		}
	}
});
	} else {
		req.flash("error", "You Need To Be Logged In To Do That!");
		res.redirect("back");
	}
};

// Check Comment Owner MW

middlewareObj.checkCommentOwnership = function(req, res, next ) {
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id, (err, foundComment) => {
			if(err) {
				res.redirect("/campgrounds");
			} else {
		// 	Does the user own the comment?
			if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin){
				next();
			} else {
				req.flash("error", "You Don't Have Permission To Do That!");
				res.redirect("back");
			}
		  }
	});
} else {
	req.flash("error", "You Need To Be Loggin In To Do That!");
	res.redirect("back");
  }
};

// Check if User is Logged in MW

middlewareObj.isLoggedIn = function(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You Need To Be Logged In To Do That!");
		res.redirect("/login");
};

module.exports = middlewareObj;






