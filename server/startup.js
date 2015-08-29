Geo = null;

Meteor.startup(function () {
  Geo = new GeoCoder({
    geocoderProvider: configs.geocoder.geocoderProvider,
    httpAdapter: configs.geocoder.httpAdapter,
    apiKey: configs.geocoder.apiKey
  });
});