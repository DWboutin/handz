Template.addPost.onRendered(function(){
	$('select').material_select();
	$('#needs').characterCounter();
    $('.modal-trigger').leanModal();
});

Template.addPost.events({
	'focus #needs': function(evt, tmpl){
		var el = $(evt.currentTarget);
		var form = el.closest('form');

		form.css('height','auto');
	},
	'blur #needs': function(evt, tmpl){
		var el = $(evt.currentTarget);
		var form = el.closest('form');
		var val = tmpl.find('#needs').value;

		if(val.length <= 0){
			form.css({
                height: 'auto',
                overflow: 'visible'
            });
		}
	},
	'submit form': function(evt, tmpl){
		evt.preventDefault();

		var form = tmpl.find('form');
    	var needs = tmpl.find('[name="needs"]').value;
    	var category = tmpl.find('[name="category"]').value;
    	var location = tmpl.find('[name="location"]').value;
    	var latitude = tmpl.find('[name="latitude"]').value;
    	var longitude = tmpl.find('[name="longitude"]').value;
    	var infos = tmpl.find('[name="infos"]').value;

    	// Sanitizing
    	needs = validator.toString(needs).trim();
    	category = validator.toString(category).trim();
    	infos = validator.toString(infos).trim();

    	// validation
    	if(needs.length <= 0 || !validator.isLength(needs, 20, 140)){

    	}
    	if(category.length <= 0){

    	}
    	if(location.length <= 0){

    	}
    	if(latitude === 0 || longitude === 0){

    	}
    	if(infos.length <= 0 || !validator.isJSON(JSON.parse(infos))){

    	}

    	var newPost = {
    		content: needs,
    		category: category,
    		location: location,
			latitude: latitude,
			longitude: longitude,
			infos: infos
    	};
    	
        Meteor.call('addPost', newPost, function(){
            needs = '';
        });
	}
});

Template.changeLocationModal.events({
    'click #changeLocationOk': function(evt, tmpl){

        var address = tmpl.find('#changeAddress').value;

        if(address.length > 0){
            Meteor.call('locationFromAddress', address, function (err, res) {
                Session.set('geolocation', res[0]);
            });
        }
    }
});