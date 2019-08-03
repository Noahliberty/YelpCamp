var mongoose = require("mongoose"),
	Campground = require("./models/campground"),
	Comment    = require("./models/comment");

var date = [
	{
		name: "Clouds Rest",
	 	image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
	 	description: "Spicy jalapeno bacon ipsum dolor amet spare ribs ham hock shoulder ribeye, turducken kevin ground round burgdoggen biltong drumstick beef ribs. Pancetta sirloin tenderloin, hamburger meatball pig porchetta bresaola beef corned beef brisket frankfurter. Jerky fatback alcatra frankfurter. Tail capicola tri-tip short loin short ribs, chuck bacon pork frankfurter t-bone pastrami shank hamburger. Chuck pork loin burgdoggen jowl buffalo ground round venison beef ribs frankfurter alcatra boudin ham hock kevin swine tongue. Beef ribs fatback bresaola alcatra, drumstick shankle kevin prosciutto kielbasa jerky t-bone short loin ham pig. Kielbasa shoulder salami tail."
	},
	{
		name: "Snowy Peaks",
	 	image: "https://images.unsplash.com/photo-1525373417962-166eb127dd6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
	 	description: "Spicy jalapeno bacon ipsum dolor amet spare ribs ham hock shoulder ribeye, turducken kevin ground round burgdoggen biltong drumstick beef ribs. Pancetta sirloin tenderloin, hamburger meatball pig porchetta bresaola beef corned beef brisket frankfurter. Jerky fatback alcatra frankfurter. Tail capicola tri-tip short loin short ribs, chuck bacon pork frankfurter t-bone pastrami shank hamburger. Chuck pork loin burgdoggen jowl buffalo ground round venison beef ribs frankfurter alcatra boudin ham hock kevin swine tongue. Beef ribs fatback bresaola alcatra, drumstick shankle kevin prosciutto kielbasa jerky t-bone short loin ham pig. Kielbasa shoulder salami tail."
	},
	{
		name: "Pine Valley",
	 	image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
	 	description: "Spicy jalapeno bacon ipsum dolor amet spare ribs ham hock shoulder ribeye, turducken kevin ground round burgdoggen biltong drumstick beef ribs. Pancetta sirloin tenderloin, hamburger meatball pig porchetta bresaola beef corned beef brisket frankfurter. Jerky fatback alcatra frankfurter. Tail capicola tri-tip short loin short ribs, chuck bacon pork frankfurter t-bone pastrami shank hamburger. Chuck pork loin burgdoggen jowl buffalo ground round venison beef ribs frankfurter alcatra boudin ham hock kevin swine tongue. Beef ribs fatback bresaola alcatra, drumstick shankle kevin prosciutto kielbasa jerky t-bone short loin ham pig. Kielbasa shoulder salami tail."
	}
];

function seedDB(){
	Campground.remove({}, (err)=> {
	if(err) {
		console.log(err);
	}
		console.log("removed campgrounds!");
		// add a few Campgrounds
		date.forEach(seed => {
			Campground.create(seed, (err, campground)=> {
				if(err) {
					consloe.log(err);
				} else {
					console.log("added a campground");
// 					create a comment
					Comment.create(
						{
							text: "This place is great but I wish there was internet",
							author: "Homer"
								   }, (err, comment)=> {
									   if(err) {
										   console.log(err);
									   } else {
										campground.comments.push(comment);
										campground.save();	   
										console.log("created new comment");
									   }
									   
								   });
				}
			});
		});
	});
}



// add a few comments

module.exports = seedDB; 