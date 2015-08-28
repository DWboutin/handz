Template.feed.helpers({
	'posts': function(){
		return Posts.find({}, {sort: {createdAt: -1}}).map(function(post){

			// transform json string to object
	      	post.infos = JSON.parse(post.infos);
	      	
	      	return post;
	    });
	}
});

Template.post.events({
	'click .delete': function(evt, tmpl){
		evt.preventDefault();
		
		Meteor.call('deletePost', this._id);
	}
});
