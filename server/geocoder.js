Meteor.methods({
  locationInfos: function(lat, lng){

    var reverseGeocoding = Geo.reverse(lat, lng);

    return reverseGeocoding;

  },
  locationFromAddress: function(address){

    var addressInfos = Geo.geocode(address);

    return addressInfos;

  }
});