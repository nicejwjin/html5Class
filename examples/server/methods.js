Meteor.methods({
  friendsList: function() {
    // security
    return Friends.find({}, {sort: {no: 1}}).fetch();
  }
});