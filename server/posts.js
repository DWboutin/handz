Meteor.methods({
	'addPost': function(post){
		post.createdAt = new Date().getTime();
		Posts.insert(post);
	},
	'deletePost': function(postId){
		Posts.remove(postId);
	},
});