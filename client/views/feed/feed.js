Template.feed.helpers({
	'posts': function(){
		return Posts.find({}).map(function(post){
	      	post.infos = JSON.parse(post.infos);
	      	return post;
	    });
	}
});