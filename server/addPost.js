Meteor.methods({
	'addPost': function(post){
		post.createdAt = new Date().getTime();
		Posts.insert(post);
	}
});