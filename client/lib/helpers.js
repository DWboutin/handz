Template.registerHelper("userGeo", function () {
	
	if(Session.get('geolocation') === null){
		var geo = Geolocation.latLng() || { lat: 0, lng: 0 };
		
		if(geo.lat !== 0){
			Meteor.call('locationInfos', geo.lat, geo.lng, function(err, res){
				Session.set('geolocation', res[0]);
			});
		}
	}

	return Session.get('geolocation');

});

Template.registerHelper('jsonToString', function (obj){
	return JSON.stringify(obj);
});

Template.registerHelper('dateAgo', function (date){
	return moment(date).fromNow();
});

Template.registerHelper('formatDate', function (date){
	return moment(date).format(configs.date.displayFormat);
});

Template.registerHelper('roundKm', function (km){
	return Math.round(km);
});