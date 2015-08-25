Meteor.methods({
  locationName: function(lat, lng){
    console.log(lat, lng);
    var geo = new GeoCoder({
      geocoderProvider: configs.geocoder.geocoderProvider,
      httpAdapter: configs.geocoder.httpAdapter,
      apiKey: configs.geocoder.apiKey
    });

    var reverseGeocoding = geo.reverse(lat, lng);
    
    return reverseGeocoding;
  }
});