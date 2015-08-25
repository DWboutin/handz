Template.registerHelper("location", function () {
    return Geolocation.latLng() || { lat: 0, lng: 0 };
});

Template.registerHelper("locationError", function () {
    return Geolocation.error;
});

Template.registerHelper("geo", function () {
	var geo = Geolocation.latLng() || { lat: 0, lng: 0 };

	if(geo.lat !== 0){
		var infos = Meteor.call('locationName', geo.lat, geo.lng, function(err, res){
			console.log(res[0]);
			return res[0];
		});
	}
});

