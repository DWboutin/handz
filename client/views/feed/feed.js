function getDistanceFromLatLonInKm(point1, point2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(point2.latitude-point1.latitude);  // deg2rad below
  var dLon = deg2rad(point2.longitude-point1.longitude); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(point1.latitude)) * Math.cos(deg2rad(point2.latitude)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

Template.feed.helpers({
  'posts': function(){
    return Posts.find({}, {sort: {createdAt: -1}}).map(function(post){

      var sessionGeo = Session.get('geolocation');
      var postGeo = post;

      // transform json string to object
          post.infos = JSON.parse(post.infos);

          post.km = getDistanceFromLatLonInKm(sessionGeo, postGeo);
          
          return post;
    }).sort(function(doc1, doc2) { 
      return doc1.km - doc2.km
    }) ;
  }
});

Template.post.events({
  'click .delete': function(evt, tmpl){
    evt.preventDefault();
    
    Meteor.call('deletePost', this._id);
  }
});
