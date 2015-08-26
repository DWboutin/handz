Meteor.methods({
	'addPost': function(post){
		Posts.insert(post);
	}
});